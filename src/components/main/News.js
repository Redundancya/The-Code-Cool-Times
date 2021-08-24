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

  const changeNews = (incrementer) => {
    if (incrementer === "next") {
      setArticlesIndex((articlesIndex + 1) % 20);
    } else {
      setArticlesIndex(articlesIndex - 1);
    }
  };

  return (
    <div>
      <img
        className="mainPicture"
        src={articles[articlesIndex].urlToImage}
        alt={articles[articlesIndex]?.source?.name ?? "Loading..."}
      />
      <a href={articles[articlesIndex]?.url ?? "Loading..."}>
        <h3>{articles[articlesIndex]?.title ?? "Title loading..."}</h3>
      </a>
      <p>{articles[articlesIndex]?.description ?? "Content loading..."}</p>

      <ButtonGroup size="small" aria-label="primary button group">
        <Button
          disabled={articlesIndex === 0 ? true : false}
          onClick={() => changeNews("previous")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Previous
        </Button>
        <Button
          disabled={articlesIndex === 19 ? true : false}
          onClick={() => changeNews("next")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Next
        </Button>
      </ButtonGroup>
    </div>
  );
};

export default News;
