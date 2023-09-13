import { Avatar, Typography, Box } from "@mui/material";
import React from "react";
import Face4Icon from "@mui/icons-material/Face4";
import Face6Icon from "@mui/icons-material/Face6";
import { Preferences } from "@capacitor/preferences";

interface VictimDetailProps {
  caseId: string;
}

const VictimDetail: React.FC<VictimDetailProps> = ({ caseId }) => {

  const [casesData, setCasesData] = React.useState<any[]>([]);

  const fetchData = async () => {
    try {
      const res = await Preferences.get({ key: "AccessToken" });
      const fetchedToken = res.value || "";

      const response = await fetch(
        "https://thisisnotawebsitewallahe.uk/api/organisation/viewComplaints",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": fetchedToken,
          },
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch data.");
      }

      const data = await response.json();
      setCasesData(data.complaints || []);
    } catch (err) {
      console.log(err);
    }
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const [currentCase, setCurrentCase] = React.useState<any>(null);

  React.useEffect(() => {
    setCurrentCase(
      casesData.find((caseData) => caseData.id === parseInt(caseId, 10))
    );
  }, [caseId, casesData]);

  if (!currentCase) {
    return null;
  }

  const { gender, occupation, ethnicity, age } = currentCase;

  function GenderIconComponent({
    gender,
  }: { gender: string }) {
    switch (gender) {
      case "Male":
        return <Face6Icon fontSize="large" sx={{color:"#40B5AD"}}/>;
      case "Female":
        return <Face4Icon fontSize="large" sx={{color:"#40B5AD"}}/>;
      default:
        return null;
    }
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Avatar sx={{ width: 100, height: 100, mb: 2 }}>
       {gender ? (
        <GenderIconComponent gender={gender} />
       ) : (
        <Avatar sx={{ width: 100, height: 100, mb: 2}}>
          <Face4Icon fontSize="large" sx={{color:"#40B5AD"}}/>
        </Avatar>
       )} 
      </Avatar>
      <Typography variant="h6">{occupation}</Typography>
      <Typography variant="body1" color="textSecondary">
        {ethnicity}
      </Typography>
      <Typography variant="body1" color="textSecondary">
        {age} years old
      </Typography>
    </Box>
  );
};

export default VictimDetail;
