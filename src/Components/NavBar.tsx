import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  Tooltip,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Assets/logo.png";
import Dashboard from "../Pages/Dashboard";
import { Preferences } from "@capacitor/preferences";
import { useAuth } from "../Auth/AuthContext";

const Navbar: React.FC = () => {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const scrollToContact = () => {
    const element = document.getElementById("contactForm");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const scrollToAbout = () => {
    const element = document.getElementById("aboutUs");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleLogout = async () => {
    const token = await Preferences.get({ key: "AccessToken" }).then(
      (res) => res.value
    );
    if (!token) {
      return;
    }

    const response = await fetch(
      "https://thisisnotawebsitewallahe.uk/api/organisation/logout",
      {
        method: "DELETE",
        headers: { "Content-Type": "application/json", Authorization: token },
      }
    );

    if (response.ok) {
      await Preferences.remove({ key: "AccessToken" });
      logout();
      navigate("/");

    } else {
      // Handle error, maybe alert the user?
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="logo" width={"50px"} />
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex" }}>
            <Button
              sx={{ m: 2, my: 2, color: "black", display: "block" }}
              onClick={scrollToAbout}
              color="secondary"
              variant="text"
              className="nav-link"
            >
              About Us
            </Button>
            <Button
              sx={{ m: 2, my: 2, color: "black", display: "block" }}
              onClick={scrollToContact}
              color="secondary"
              variant="text"
              className="nav-link"
            >
              Contact Us
            </Button>
            {currentUser && (
              <Button
                sx={{ m: 2, my: 2, color: "black", display: "block" }}
                component={Link}
                to="/dashboard"
                color="secondary"
                variant="text"
                className="nav-link"
              >
                Dashboard
              </Button>
            )}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {currentUser ? (
              <Tooltip title="Logout out of your account">
                <Button
                  sx={{ color: "white" }}
                  onClick={handleLogout}
                  variant="contained"
                  color="error"
                  className="btn"
                >
                  Logout
                </Button>
              </Tooltip>
            ) : (
              <Tooltip title="Login to your dashboard">
                <Button
                  sx={{ color: "white" }}
                  component={Link}
                  to="/login"
                  variant="contained"
                  color="primary"
                  className="btn"
                >
                  Login
                </Button>
              </Tooltip>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
