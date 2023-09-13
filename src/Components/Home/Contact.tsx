import React, { useState } from "react";
import { Box, Typography, TextField, Button } from "@mui/material";
import axios from "axios";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // Send formData to the server
    axios
      .post("https://thisisnotawebsitewallahe.uk/api/contact/", formData, {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      })

      .then((response) => {
        console.log(response.data);
        alert("Your message has been sent! We'll get back to you soon.");
        // Clear the form
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        console.error("Error sending message:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <Box
      padding={4}
      display="flex"
      flexDirection="column"
      alignItems="center"
      margin={"50px auto"}
      id="contactForm"
    >
      <Typography variant="h2" gutterBottom>
        Contact Us
      </Typography>
      <Typography variant="subtitle1" paragraph>
        Have questions? Reach out to us directly!
      </Typography>

      <Box
        component="form"
        width="80%"
        maxWidth={600}
        onSubmit={handleSubmit}
        sx={{ textAlign: "center" }}
      >
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          fullWidth
          margin="normal"
          variant="outlined"
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: 16, color: "white", width: "200px" }}
          className="btn"
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
