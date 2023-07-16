import { Stack, Typography } from "@mui/material";
import logo from "../assets/alan_ai.jpg";
function Navbar() {
  return (
    <Stack
      direction={"row"}
      justifyContent="space-around "
      alignItems="center"
      sx={{
        gap: "20px",
        mt: { sm: "32px", xs: "20px" },
        justifyContent: "none",
      }}
      px="20px">
      <img
        src={logo}
        alt="logo"
        style={{
          height: "80px",
          width: "80px",
          borderRadius: "50%",
        }}
      />
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end">
        <Typography fontWeight="bold" fontSize="60px" sx={{ color: "#2f4fff" }}>
          Alan
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Navbar;
