import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [loading, setLoading] = useState(true);

  const checkForTags = (article) => {};

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?qInTitle=everything&pageSize=20&apiKey=803b1f20229542109d3b21b58d162064"
      )

      .then((response) => {
        const filteredResponse = response.data.articles.filter(
          (article) => !article.description.includes("</")
        );
        setArticles(filteredResponse);
        setLoading(false);
      });
  };

  const [articles, setArticles] = useState(() => getTopNews());

  return (
    <NewsContext.Provider
      value={{
        articles: articles,
        loading: loading,
        setArticles: setArticles,
        setLoading: setLoading,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
