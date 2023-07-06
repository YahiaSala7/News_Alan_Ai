import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import newsImg from "../assets/newsImage.jpg";
import { createRef, useEffect, useState } from "react";
function NewsCard(Props) {
  const { articleInfo, index, activeArticle } = Props;
  const {
    source,
    // author,
    title,
    description,
    url,
    urlToImage,
    publishedAt,
    // content,
  } = articleInfo;
  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => {
    window.scroll(0, ref.current.offsetTop - 50);
  };

  useEffect(() => {
    window.scroll(0, 0);

    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);
  return (
    <Card
      sx={{
        maxWidth: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderBottom: activeArticle === index ? "10px solid #22289a" : null,
      }}
      ref={elRefs[index]}>
      <CardMedia
        component="img"
        height="250px"
        image={urlToImage || newsImg}
        alt={title}
      />
      <CardContent>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="body2" gutterBottom color="text.secondary">
            {new Date(publishedAt).toDateString()}
          </Typography>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            {source.name}
          </Typography>
        </Stack>
        <Typography
          fontWeight="bold"
          sx={{ fontSize: { xs: "18px", sm: "16px" } }}>
          {title}
        </Typography>
        <Typography
          color="text.secondary"
          sx={{ fontSize: { xs: "18px", sm: "16px" } }}>
          {description}
        </Typography>
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <Button variant="text" href={url}>
          Learn more
        </Button>
        <Typography variant="h6" color="text.secondary">
          {index + 1}
        </Typography>
      </CardActions>
    </Card>
  );
}

export default NewsCard;
