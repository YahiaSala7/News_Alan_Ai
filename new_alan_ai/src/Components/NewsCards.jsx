import { Box, Grid, Pagination, Typography } from "@mui/material";
import NewsCard from "./NewsCard";
import { useState } from "react";
const infoCards = [
  { color: "#00838f", title: "Latest News", text: "Give me the latest news" },
  {
    color: "#1565c0",
    title: "News by Categories",
    info: "Business, Entertainment, General, Health, Science, Sports, Technology",
    text: "Give me the latest Technology news",
  },
  {
    color: "#4527a0",
    title: "News by Terms",
    info: "Bitcoin, PlayStation 5, Smartphones, Donald Trump...",
    text: "What's up with PlayStation 5",
  },
  {
    color: "#283593",
    title: "News by Sources",
    info: "CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...",
    text: "Give me the news from CNN",
  },
];

function NewsCards(Props) {
  const { articles, activeArticle } = Props;
  const [currentPage, setCurrentPage] = useState(1);
  const newsPerPage = 9;
  const numberOfPages = Math.ceil(articles.length / newsPerPage);
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = articles.slice(indexOfFirstNews, indexOfLastNews);
  const paginate = (event, value) => {
    setCurrentPage(value);

    window.scrollTo({ top: 1600, behavior: "smooth" });
  };
  if (!articles.length) {
    return (
      <Box>
        <Grid container alignItems="stretch" spacing={3} p="5%">
          {infoCards.map((infoCard, index) => (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              sx={{
                display: "flex",
                flexDirection: "column",
                textAlign: "center",
              }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  height: "45vh",
                  p: "10%",
                  borderRadius: 10,
                  color: "white",
                }}
                style={{ backgroundColor: infoCard.color }}>
                <Typography variant="h5" component="h5">
                  {infoCard.title}
                </Typography>
                {infoCard.info ? (
                  <Typography variant="h6" component="h6">
                    <strong>{infoCard.title.split(" ")[2]}</strong>: <br />
                    {infoCard.info}
                  </Typography>
                ) : null}
                <Typography variant="h6" component="h6">
                  Try saying: <br /> <i>{infoCard.text}</i>
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
  }
  return (
    <Box>
      <Grid container spacing={1} justifyContent="center" p="5%">
        {currentNews.map((articleInfo, index) => (
          <Grid
            item
            key={index}
            container
            xs={12}
            sm={6}
            md={4}
            lg={3}
            alignItems="center"
            justifyContent="center"
            sx={{ display: "flex", pb: "10px" }}>
            <NewsCard
              articleInfo={articleInfo}
              index={index}
              activeArticle={activeArticle}
            />
          </Grid>
        ))}
      </Grid>
      {articles.length > 9 && (
        <Pagination
          shape="rounded"
          count={numberOfPages}
          sx={{
            display: "flex",
            justifyContent: "center",
            m: "20px 0",
            pb: "10px",
          }}
          page={currentPage}
          onChange={paginate}
          size="large"
        />
      )}
    </Box>
  );
}

export default NewsCards;
