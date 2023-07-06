import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import Loader from "./Loader";
function SearchNews(Props) {
  const { setArticles } = Props;
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const handleSearch = async () => {
    const apiKey = import.meta.env.VITE_APP_NEWS_API_KEY;
    const apiUrl = `https://newsapi.org/v2/everything?q=${search}&apiKey=${apiKey}`;
    if (search) {
      await axios
        .get(apiUrl)
        .then((response) => {
          setArticles(response.data.articles);
          setIsLoading(false);
          setError("");
        })
        .catch((error) => {
          setArticles([]);
          setIsLoading(true);
          setError(error.message);
        });
    }
  };
  //   if (isLoading) {
  //     return <Loader />;
  //   }
  //   if (error) {
  //     return <Typography>{error}</Typography>;
  //   }

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
          onClick={handleSearch}>
          Search
        </Button>
      </Box>
    </Stack>
  );
}

export default SearchNews;
