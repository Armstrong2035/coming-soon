import { Grid2, Stack } from "@mui/material";
import TextOne from "./TextOne";
import TextThree from "./TextThree";
import TextTwo from "./TextTwo";

export default function HeroTexts() {
  return (
    <Stack alignItems={"center"} justifyContent={"center"}>
      <TextOne />
      <TextTwo />
      <TextThree />
    </Stack>
  );
}
