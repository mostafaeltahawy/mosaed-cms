import { Link, useParams } from "react-router-dom";
import { Box, Typography, Paper, Button } from "@mui/material";
import React from "react";
import VictimDetail from "../Components/Dashboard/VictimDetail";
import { Preferences } from "@capacitor/preferences";

interface CaseParams {
  [key: string]: string | undefined;
  caseId?: string;
}

const CaseDetail: React.FC = () => {
  const { caseId } = useParams<CaseParams>();

  const [casesData, setCasesData] = React.useState<any[]>([]);

  if (!caseId) {
    return null;
  }

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

  const [currentCase, setCurrentCase] = React.useState<any>(
    casesData.find((caseData) => caseData.id === parseInt(caseId, 10))
  );

  React.useEffect(() => {
    setCurrentCase(
      casesData.find((caseData) => caseData.id === parseInt(caseId, 10))
    );
  }, [caseId, casesData]);

  if (!currentCase) {
    return <div>Loading...</div>;
  }

  const updateStatus = () => {
    // Define status progression
    const statusProgression = [
      "Awaiting Legal Review",
      "Consultation Scheduled",
      "Legal Proceedings Initiated",
      "Resolved",
    ];
    const currentIndex = statusProgression.indexOf(currentCase.status);

    if (currentIndex < statusProgression.length - 1) {
      // Get the next status in the sequence
      const nextStatus = statusProgression[currentIndex + 1];

      // Update the case in casesData array
      const caseIndex = casesData.findIndex(
        (caseData) => caseData.id === currentCase.id
      );
      casesData[caseIndex].status = nextStatus;

      // Update the state for re-render
      setCurrentCase({ ...currentCase, status: nextStatus });
    }
  };

  return (
    <Box
      sx={{
        padding: 3,
        maxWidth: 1200,
        margin: "0 auto",
        display: "flex",
        justifyContent: "space-evenly",
      }}
    >
      <Box width={"75%"}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <Typography variant="h4" gutterBottom>
            {currentCase.complaint_content}
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            Status:
          </Typography>
          <Typography variant="body1" paragraph>
            {currentCase.status}
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            Type:
          </Typography>
          <Typography variant="body1" paragraph>
            {currentCase.type}
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            Rating:
          </Typography>
          <Typography variant="body1" paragraph>
            {currentCase.urgency}
          </Typography>

          <Typography variant="h6" color="textSecondary" gutterBottom>
            Location:
          </Typography>
          <Typography variant="body1" paragraph>
            {currentCase.organisation_name}
          </Typography>
          <Box display={"flex"} justifyContent={"space-between"}>
            <Button
              variant="contained"
              color="primary"
              component={Link}
              to="/dashboard"
              className="btn"
            >
              Go back to Dashboard
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={updateStatus}
              disabled={currentCase.status === "Resolved"}
              className="btn"
            >
              Update Status
            </Button>
          </Box>
        </Paper>
      </Box>
      <Box width={"20%"}>
        <Paper elevation={3} sx={{ padding: 3 }}>
          <VictimDetail caseId={caseId} />
        </Paper>
      </Box>
    </Box>
  );
};

export default CaseDetail;
