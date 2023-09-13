import React from "react";
import { Box, List, ListItem, Typography } from "@mui/material";
import microsoft from "../../Assets/Microsoft-Logo.png";
import acta from "../../Assets/acta-logo.jpg";
import moi from "../../Assets/moi-logo.png";
import injaz from "../../Assets/injaz-logo.png";
import unodc from "../../Assets/unodc.png";

const Partners: React.FC = () => {
  // You can add more logos to this array
  const logos = [microsoft, acta, moi, injaz, unodc];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      paddingY={4}
      margin={"100px auto"}
    >

      <List
        component="nav"
        sx={{
          display: "flex",
          flexDirection: "row",
          overflowX: "auto",
          justifyContent: "space-between",
          padding: 0,
        }}
      >
        {logos.map((logo, index) => (
          <ListItem key={index} sx={{ marginRight: 2 }}>
            <img
              src={logo}
              alt={`Partner ${index}`}
              style={{ width: "auto", height: "50px", opacity: "0.7" }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Partners;
