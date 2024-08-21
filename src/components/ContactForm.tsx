import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // To show success message
  const [isFormVisible, setIsFormVisible] = useState(true); // To control form visibility

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Prepare the WhatsApp message
    const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER; // Use environment variable
    const message = `Name: ${formData.name}\nEmail: ${formData.email}\nSubject: ${formData.subject}\nMessage: ${formData.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Open WhatsApp in a new tab
    window.open(whatsappLink, "_blank");

    // Show success message and hide form
    setIsFormVisible(false);
    setStatus("Message sent successfully!");

    // Reset form data
    setFormData({ name: "", email: "", subject: "", message: "" });

    // Show form again after 3 seconds
    setTimeout(() => {
      setStatus("");
      setIsFormVisible(true);
    }, 3000);
  };

  return (
    <Box sx={{ p: "1rem" }}>
      {status && (
        <Typography
          sx={{
            textAlign: "center",
            color: "green",
            marginBottom: "1rem",
          }}
        >
          {status}
        </Typography>
      )}
      {isFormVisible && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <TextField
            id="name"
            label="Your Name"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={formData.name}
            onChange={handleChange}
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{
              backgroundColor: "#5E5A5A",
            }}
          />
          <TextField
            id="email"
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
            value={formData.email}
            onChange={handleChange}
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{
              backgroundColor: "#5E5A5A",
            }}
          />
          <TextField
            id="subject"
            label="Subject"
            type="text"
            variant="outlined"
            fullWidth
            required
            value={formData.subject}
            onChange={handleChange}
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{
              backgroundColor: "#5E5A5A",
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
            value={formData.message}
            onChange={handleChange}
            InputProps={{
              style: { color: "#fff" },
            }}
            InputLabelProps={{
              style: { color: "#fff" },
            }}
            sx={{
              backgroundColor: "#5E5A5A",
            }}
          />
          <Button
            onClick={handleSubmit}
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
      )}
    </Box>
  );
};

export default ContactForm;
