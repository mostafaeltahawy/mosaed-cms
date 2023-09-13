import React from "react";
import { Container, Typography, Box, IconButton, Avatar } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import logo from "../Assets/logo.png";

const Footer: React.FC = () => {
  return (
    <Box mt={5} bgcolor="black" color="white" py={3} className="footer">
      <Box sx={{display: "flex", justifyContent: "center", alignItems: "center"}}>
        <Avatar sx={{ m: 1, background: "white", p: 1 }} alt="logo" src={logo} />
        <Box
        >
        <IconButton
          href="https://www.instagram.com/mosaed.bh?igshid=MzRIODBiNWFIZA==q"
          target="_blank"
          aria-label="Instagram"
          sx={{display: "flex", justifyContent: "center", alignItems: "center"}}
        >
          <InstagramIcon fontSize="small" sx={{color: "white"}} />
        </IconButton>
        <Typography variant="body1" align="center">
          © 2023 All rights reserved.
        </Typography>
        </Box>
       
        {/* Additional links or information can be added here */}
      </Box>
    </Box>
  );
};

export default Footer;
