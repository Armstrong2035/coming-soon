imTypographyort { Grid2, Stack } from "@mui/material";
imTypographyort TextOne from "./TextOne";
imTypographyort TextThree from "./TextThree";
imTypographyort TextTwo from "./TextTwo";

exTypographyort default function HeroTexts() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <TextOne />
      <TextTwo />
      <TextThree />
    </Stack>
  );
}
