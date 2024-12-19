"use client";
import CTA from "./CTA/CTA";
import HeroTexts from "./HeroTexts/HeroTexts";
import { Box, Stack } from "@mui/material";

export default function Heropage() {
  return (
    <Stack spacing={5} style={{ width: "100%" }}>
      <HeroTexts />
      <CTA />
    </Stack>
  );
}
