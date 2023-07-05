import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";

function SearchNews() {
  const [search, setSearch] = useState("");
  //   const [bodyParts, setBodyParts] = useState([]);
  //   const handleSearch = async () => {
  //     if (search) {
  //       const exercisesData = await fetchData(
  //         "https://exercisedb.p.rapidapi.com/exercises",
  //         exerciseOptions
  //       );

  //       const searchedExercises = exercisesData.filter(
  //         (item) =>
  //           item.name.toLowerCase().includes(search) ||
  //           item.target.toLowerCase().includes(search) ||
  //           item.equipment.toLowerCase().includes(search) ||
  //           item.bodyPart.toLowerCase().includes(search)
  //       );
  //       window.scrollTo({ top: 1600, left: 100, behavior: "smooth" });
  //       setSearch("");
  //       setExercises(searchedExercises);
  //     }
  //   };

  //   useEffect(() => {
  //     const fetchExercisesData = async () => {
  //       const bodyPartsData = await fetchData(
  //         "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
  //         exerciseOptions
  //       );
  //       setBodyParts(["all", ...bodyPartsData]);
  //     };

  //     fetchExercisesData();
  //   }, []);
  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", sm: "40px" } }}
        textAlign={"center"}
        mb="50px">
        Hi,you can search for news or <br /> using alan to help you
      </Typography>
      <Box position="relative" mb="70px">
        <TextField
          label="Search News"
          height="76px"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          sx={{
            input: {
              fontWeight: 700,
              border: "none",
            },
            width: { lg: "1170px", sm: "550px", xs: "350px" },
            bgcolor: "#fff",
            color: "#2f4fff",
          }}
        />
        <Button
          variant="contained"
          color="error"
          sx={{
            bgcolor: "#2f4fff",
            borderRadius: 0,
            p: "15px ",
            width: { lg: "173px", xs: "80px" },
            textTransform: "none",
            height: "56px",
            position: "absolute",
            right: "0px",
            fontSize: { lg: "20px", xs: "14px" },
            "&:hover": { bgcolor: "#2f4fff" },
          }}
          //   onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      {/* <Box sx={{ position: "relative", width: "100%", p: "20px" }}></Box> */}
    </Stack>
  );
}

export default SearchNews;
