import React from "react";
import {
  Box,
  Typography,
  Button,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import NoAccountsIcon from "@mui/icons-material/NoAccounts";
import SecurityIcon from "@mui/icons-material/Security";
import BlindsIcon from "@mui/icons-material/Blinds";
import BalanceIcon from "@mui/icons-material/Balance";
import SwitchAccessShortcutIcon from "@mui/icons-material/SwitchAccessShortcut";

const Compare: React.FC = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      padding={4}
      margin={"100px auto"}
    >
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        paddingRight={4}
        width={"40%"}
      >
        <Typography variant="h2" gutterBottom>
          Mosaed Values
        </Typography>
        <Typography variant="body1" paragraph>
          Discover the difference how Mosaed stands out in empowering
          whistleblowers and fostering organizational transperancy.{" "}
        </Typography>
      </Box>
      <Box maxWidth={"450px"}>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#40B5AD" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <NoAccountsIcon sx={{ color: "#40B5AD", m: "0 10px" }} />
            <Typography variant="h4">Anonymity</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Ensuring the identity of whistleblowers remains undisclosed. With
              Mosaed, individuals can report without fear of being recognized or
              facing retaliation.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#40B5AD" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <SecurityIcon sx={{ color: "#40B5AD", m: "0 10px" }} />
            <Typography variant="h4">Security</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our state-of-the-art encryption and security protocols ensure that
              sensitive information remains confidential and protected from
              breaches.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#40B5AD" }} />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <BlindsIcon sx={{ color: "#40B5AD", m: "0 10px" }} />
            <Typography variant="h4">Transparency</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mosaed promotes an open environment where organizations are held
              accountable, fostering trust and integrity in all transactions.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#40B5AD" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <BalanceIcon sx={{ color: "#40B5AD", m: "0 10px" }} />
            <Typography variant="h4">Equality </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              We believe in leveling the playing field. Every voice, regardless
              of rank or status, deserves to be heard and treated with equal
              importance.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: "#40B5AD" }} />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <SwitchAccessShortcutIcon sx={{ color: "#40B5AD", m: "0 10px" }} />
            <Typography variant="h4">Accessibility </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Our platform is designed to be user-friendly, ensuring that
              individuals from all backgrounds can navigate and report with
              ease.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
};

export default Compare;
