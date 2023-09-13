import React from "react";
import { Box, Typography } from "@mui/material";

const HowCanWeHelp: React.FC = () => {
  // Define the content for the four boxes
  const boxes = [
    { title: "General", description: "How Secure is Mosaed \n Engagement rate with Whistleblowers \n Required IT Integrations?" },
    { title: "License", description: "Renewing out License \n  Pricing for non-profits \n Organization Restrictions" },
    { title: "Refund Policy", description: "Conditions for refunds \n  How are refunds calculated \n Refund processing time" },
    { title: "Account", description: "Resetting organization credentials \n Modifying organizations details \n Onboarding for organizations" },
  ];

  return (
    <Box
      padding={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin={"100px auto"}
      id="aboutUs"
    >
      <Typography variant="h2" gutterBottom>
        How Can We Help You?
      </Typography>
      <Typography variant="subtitle1" paragraph>
        We offer a range of services tailored to your needs.
      </Typography>

      <Box display="flex" justifyContent="space-between" width="70%">
        {boxes.map((box, index) => (
          <Box
            className="service-box"
            width="23%"
            border={3}
            borderColor="transparent"
            // borderTopColor="blue"
            padding={2}
            textAlign="center"
          >
            <Typography variant="h3" color={"#40B5AD"} gutterBottom>{box.title}</Typography>
            {box.description.split('\n').map(line => (
              <Typography variant="body1" >{line}</Typography>
            ))}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default HowCanWeHelp;
