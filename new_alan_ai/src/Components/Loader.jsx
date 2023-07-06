import { Box, CircularProgress } from "@mui/material";

function Loader() {
  return (
    <Box display={"flex"} justifyContent="center">
      <CircularProgress color="error" />
    </Box>
  );
}

export default Loader;
