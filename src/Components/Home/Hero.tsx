import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import heroImage from "../../Assets/hero.png";

const HeroBanner: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
      margin={"50px auto"}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingRight={4}
        width={"40%"}
      >
        <Typography variant="h1" gutterBottom>
          Empower truth, Foster{" "}
          <span style={{ color: "#40B5AD", fontWeight: 600 }}>Trust</span>. The
          whistleblower Bridge.
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Creating a transparent future by bridging the app between
          organizations and their whistleblowers. Ensure accountability, uphold
          ethics, and drive positive change together.{" "}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
          className="btn"
          sx={{ width: "fit-content", color: "white" }}
        >
          Go To Your Dahsboard
        </Button>
      </Box>
      <Box maxWidth={"800px"}>
        <img
          src={heroImage}
          alt="Hero"
          style={{ width: "100%", height: "auto", objectFit: "cover" }}
        />
      </Box>
    </Box>
  );
};

export default HeroBanner;
