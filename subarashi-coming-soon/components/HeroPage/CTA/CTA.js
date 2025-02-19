import React, { useEffect } from "react";
import { Stack } from "@mui/material";
import Script from "next/script";

export default function CTA() {
  useEffect(() => {
    // Clean up any existing scripts when component unmounts
    return () => {
      const existingScript = document.querySelector(
        'script[src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"]'
      );
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const iframeStyles = {
    width: "100%",
    maxWidth: "800px",
    height: "60vh", // You can adjust this value
    border: "1px solid #ccc",
    borderRadius: "8px",
    backgroundColor: "#FCFFF3",
  };

  return (
    <Stack alignItems="center" sx={{ width: "100%", p: 2 }}>
      <iframe
        className="clickup-embed clickup-dynamic-height"
        src="https://forms.clickup.com/9018775511/f/8crz5yq-12738/JT27H1HIYWJR84YWN2"
        style={iframeStyles}
        onWheel={(e) => e.stopPropagation()}
      />
      <Script
        src="https://app-cdn.clickup.com/assets/js/forms-embed/v1.js"
        strategy="lazyOnload"
      />
    </Stack>
  );
}
