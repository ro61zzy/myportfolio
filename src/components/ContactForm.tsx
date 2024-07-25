import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

const ContactForm = () => {
  return (
    <Box sx={{ p: "1rem" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
        <TextField
          id="email"
          label="Your Name"
          type="text"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#5E5A5A",
            color: "#fff",
          }}
        />
        <TextField
          id="email"
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#5E5A5A",
            color: "#fff",
          }}
        />
        <TextField
          id="email"
          label="Subject"
          type="text"
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#5E5A5A",
            color: "#fff",
          }}
        />
        <TextField
          id="message"
          label="Message"
          multiline
          rows={4}
          variant="outlined"
          fullWidth
          required
          sx={{
            backgroundColor: "#5E5A5A",
            color: "#fff",
          }}
        />
        <Button
          sx={{
            textTransform: "none",
            fontWeight: "600",
            color: "#fff",
            backgroundColor: "#720404",
          }}
        >
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
