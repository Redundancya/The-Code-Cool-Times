import axios from "axios";
import React, { useState, useEffect } from "react";

export const News = () => {
  const [article, setArticle] = useState([]);
  const [articleIndex, setArticleIndex] = useState(0);

  useEffect(() => {
    getTopNews();
  }, [article]);

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=everything&apiKey=803b1f20229542109d3b21b58d162064"
      )
      .then((response) => {
        setArticle(response.data.articles[articleIndex]);
      });
  };

  return (
    <div>
      <img
        href={article.urlToImage}
        alt={article.source?.name || "Not loaded yet"}
      />
      <a href={article.url}>{article.title}</a>
      <p>{article.description}</p>
    </div>
  );
};

export default News;
