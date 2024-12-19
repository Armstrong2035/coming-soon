import { Typography, Box } from "@mui/material";
import { fontStyles } from "../../../utils/fontStyles";
import { useTheme, useMediaQuery } from "@mui/material";

export default function TextOne() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box>
      <Typography style={{ ...fontStyles.largeBody }}>Subarashi's</Typography>
    </Box>
  );
}
