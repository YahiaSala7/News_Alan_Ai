import { useEffect, useState } from "react";
import alanBtn from "@alan-ai/alan-sdk-web";
import "./App.css";
import wordsToNumber from "words-to-number";
import NewsCards from "./Components/NewsCards";
import { Box } from "@mui/material";
const alanKey = import.meta.env.VITE_APP_ALAN_AI_SDK_KEY;
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import SearchNews from "./Components/SearchNews";
function App() {
  const [articles, setArticles] = useState([]);
  console.log(articles);

  const [activeArticle, setActiveArticle] = useState(-1);
  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, articles, number }) => {
        if (command === "newHeadlines") {
          setArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevArticle) => prevArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2 ? wordsToNumber(number, { fuzzy: true }) : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > articles.length) {
            alanBtn().playText("Please try that again...");
          } else if (article) {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening...");
          } else {
            alanBtn().playText("Please try that again...");
          }
        }
      },
    });
  }, []);

  return (
    <Box height="100vh">
      <Navbar />
      <SearchNews articles={articles} setArticles={setArticles} />
      <NewsCards articles={articles} activeArticle={activeArticle} />
      <Footer />
    </Box>
  );
}

export default App;
