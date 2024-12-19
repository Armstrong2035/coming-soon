import { Stack, Box, Typography } from "@mui/material";
import { fontStyles } from "../../../utils/fontStyles";

export default function TextTwo() {
  return (
    <Stack
      direction={"row"}
      alignItems={"center"}
      justifyContent={"space-between"}
      spacing={5}
    >
      <Typography style={{ ...fontStyles.largeBody }}>
        Awesome Website
      </Typography>
      {/* <Box>
        <Typography style={{ ...fontStyles.regularBody }}>
          Have an inquiry?
        </Typography>

        <Typography style={{ ...fontStyles.regularBody }}>
          Fill the form below
        </Typography>
      </Box> */}
    </Stack>
  );
}
