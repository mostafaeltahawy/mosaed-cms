import React from "react";
import { Box, Typography, Grid, Paper, Tabs, Tab } from "@mui/material";
import { useNavigate } from "react-router-dom";
import DashboardCard from "../Components/Dashboard/Card";
import { useAuth } from "../Auth/AuthContext";
import { Preferences } from "@capacitor/preferences";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      style={{ width: "90%", margin: 10, padding: 10 }}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3, width: "100%" }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const Dashboard: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const [cases, setCases] = React.useState([]);
  const [filteredCases, setFilteredCases] = React.useState([]);

  const { currentUser } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!currentUser) {
      navigate("/login");
    }
  }, [currentUser, navigate]);

  React.useEffect(() => {
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
        setCases(data.complaints || []);
        setFilteredCases(data.complaints || []);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    const status = getStatusFromTabIndex(newValue);
    let filtered = cases;

    if (status !== "All") {
      filtered = filtered.filter((caseItem) => caseItem.status === status);
    }
    setFilteredCases(filtered);
  };

  const getStatusFromTabIndex = (index: number) => {
    const statuses = [
      "All",
      "Awaiting Legal Review",
      "Consultation Scheduled",
      "Legal Proceedings Initiated",
      "Resolved",
      "Rejected",
    ];
    return statuses[index];
  };

  const getStatusProgress = (status: string) => {
    switch (status) {
      case "Awaiting Legal Review":
        return 25;
      case "Consultation Scheduled":
        return 50;
      case "Legal Proceedings Initiated":
        return 75;
      case "Resolved":
        return 100;
      default:
        return 0;
    }
  };

  filteredCases.sort((a, b) => b.urgency - a.urgency);

  return (
    <Box>
      <Grid item margin={5}>
        <Typography variant="h2">Hi {currentUser},</Typography>
        <Paper
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            sx={{
              borderRight: 1,
              borderColor: "divider",
              position: "sticky",
              top: 0,
            }}
          >
            <Tab label="All" {...a11yProps(0)} />
            <Tab label="Awaiting Legal Review" {...a11yProps(1)} />
            <Tab label="Consultation Scheduled" {...a11yProps(2)} />
            <Tab label="Legal Proceedings Initiated" {...a11yProps(3)} />
            <Tab label="Resolved" {...a11yProps(4)} />
            <Tab label="Rejected" {...a11yProps(4)} />{" "}
          </Tabs>
          <Box
            sx={{
              flexGrow: 1,
              bgcolor: "background.paper",
              display: "flex",
              flexDirection: "column",
              overflowY: "scroll",
              maxHeight: "80vh",
            }}
          >
            <TabPanel value={value} index={value}>
              {filteredCases.map((caseItem) => (
                <DashboardCard
                  key={caseItem.id}
                  id={caseItem.id}
                  description={caseItem.complaint_content}
                  status={caseItem.status}
                  getStatusProgress={getStatusProgress}
                  type={caseItem.type}
                  rating={caseItem.urgency}
                  location={caseItem.organisation_name}
                />
              ))}
            </TabPanel>
          </Box>
        </Paper>
      </Grid>
    </Box>
  );
};

export default Dashboard;
