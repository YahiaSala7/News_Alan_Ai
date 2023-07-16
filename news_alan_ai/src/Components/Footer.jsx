import { Box, IconButton, Stack, Typography } from "@mui/material";
import logo from "../assets/alan_ai.jpg";
import { GitHub, LinkedIn } from "@mui/icons-material";
function Footer() {
  return (
    <Box
      mt="80px"
      bgcolor="#2f4fff"
      p="10px 0"
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      color="white"
      flexDirection={{ md: "row", xs: "column" }}>
      <Typography
        variant="h5"
        sx={{ fontSize: { lg: "28px", xs: "20px" } }}
        my={{ xs: "20px", md: "0" }}
        textAlign="center">
        Developed By{" "}
        <span style={{ color: "black", fontWeight: "bold" }}>Q-Blink</span>{" "}
        Company
      </Typography>
      <Stack
        px="40px"
        direction="rwo"
        justifyContent="center"
        alignItems="center"
        gap="10px">
        <img
          src={logo}
          alt="logo"
          style={{ height: "50px", width: "50px", borderRadius: "50%" }}
        />
        <Typography variant="h5" sx={{ fontSize: "30px" }} textAlign="center">
          Alan
        </Typography>
      </Stack>

      <Stack
        direction="row"
        justifyContent="center"
        spacing={2}
        alignItems="center">
        {/* <Typography
          variant="h5"
          sx={{ fontSize: { lg: "28px", xs: "20px" } }}
          textAlign="center"
          my={{ xs: "20px", md: "0" }}>
          you can find me on:
        </Typography>
        <IconButton
          href="#"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
          }}>
          <GitHub
            sx={{ fontSize: { xs: "30px", sm: "40px" }, color: "white" }}
          />
        </IconButton>
        <IconButton
          href="#"
          sx={{
            "&:hover": {
              bgcolor: "transparent",
              transform: "scale(1.1)",
              transition: ".4s",
            },
          }}>
          <LinkedIn
            sx={{ fontSize: { xs: "30px", sm: "40px" }, color: "white" }}
          />
        </IconButton> */}
        <Typography>© 2023 ALL RIGHTS RESERVED</Typography>
      </Stack>
    </Box>
  );
}

export default Footer;
