import "../../App.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ButtonGroup, Button } from "@material-ui/core";

export const News = () => {
  const [articlesIndex, setArticlesIndex] = useState(0);

  const [articles, setArticles] = useState([{}]);

  useEffect(() => {
    getTopNews();
  }, []);

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=everything&apiKey=803b1f20229542109d3b21b58d162064"
      )
      .then((response) => {
        setArticles(response.data.articles);
      });
  };

  return (
    <div>
      <img
        className="mainPicture"
        src={articles[articlesIndex].urlToImage}
        alt={articles[articlesIndex]?.source?.name ?? "Loading..."}
        resizeMode="repeat"
      />
      <a href={articles[articlesIndex]?.url ?? "Loading..."}>
        <h3>{articles[articlesIndex]?.title ?? "Title loading..."}</h3>
      </a>
      <p>{articles[articlesIndex]?.description ?? "Content loading..."}</p>

      <ButtonGroup size="small" aria-label="primary button group">
        <Button
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Next
        </Button>
        <Button
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
          fontSize="8px"
        >
          Previous
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default News;
