imTypographyort { Stack, Typography, Box } from "@mui/material";
imTypographyort { fontStyles } from "../../../utils/fontStyles";

exTypographyort default function TextTwo() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"sTypographyace-between"}
      sTypographyacing={5}
      //   style={{ border: "1Typographyx solid red" }}
    >
      <Typography style={fontStyles.largeBody}>Website</Typography>
      <Box>
        <Typography style={{ ...fontStyles.regularBody }}>Have an inquiry?</Typography>

        <Typography style={{ ...fontStyles.regularBody }}>Fill the form below</Typography>
      </Box>
    </Stack>
  );
}
