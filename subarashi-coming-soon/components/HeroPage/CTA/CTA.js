import React, { useState } from "react";
import { Grid2, Stack, useTheme, useMediaQuery } from "@mui/material";

export default function CTA() {
  const [isHovered, setIsHovered] = useState(false);
  const [email, setEmail] = useState("");

  const theme = useTheme();
  const isMobile = useMediaQuery("(max-width:900px)"); // md breakpoint

  const buttonStyles = {
    padding: "20px 40px",
    border: "none",
    borderRadius: "50px",
    cursor: "pointer",
    backgroundColor: isHovered ? "#0056b3" : "#1D252C",
    color: "white",
    transition: "background-color 0.3s ease",
    fontFamily: "Outfit, sans-serif",
    fontStyle: "normal",
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "16px",
    width: isMobile ? "100%" : "auto",
  };

  const inputStyles = {
    padding: "20px",
    fontSize: "16px",
    marginRight: isMobile ? "0" : "10px",
    borderRadius: "50px",
    border: "1px solid #ccc",
    width: "100%",
    boxSizing: "border-box",
  };

  const formStyles = {
    width: "100%",
    maxWidth: "800px",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <Stack alignItems="center" sx={{ width: "100%" }}>
      <form onSubmit={handleSubmit} style={formStyles}>
        <Grid2
          container
          spacing={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Grid2 xs={12} md={6} lg={8}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Please enter your email"
              style={inputStyles}
              required
            />
          </Grid2>
          <Grid2 xs={12} md={6} lg={4}>
            <button
              type="submit"
              style={buttonStyles}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              Subscribe
            </button>
          </Grid2>
        </Grid2>
      </form>
    </Stack>
  );
}
