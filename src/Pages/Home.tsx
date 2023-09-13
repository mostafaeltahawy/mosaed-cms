import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Typography } from "@mui/material";
import Pricing from "../Components/Home/Pricing";
import HeroBanner from "../Components/Home/Hero";
import Partners from "../Components/Home/Brands";
import Compare from "../Components/Home/Compare";
import HowCanWeHelp from "../Components/Home/Help";
import ContactForm from "../Components/Home/Contact";

const Home: React.FC = () => {
  return (
    <Box>
      <HeroBanner />
      <Partners />
      <Compare />
      <HowCanWeHelp />
      <Pricing />
      <ContactForm />
    </Box>
  );
};

export default Home;
