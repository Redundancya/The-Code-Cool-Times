import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [newsTheme, setNewsTheme] = useState("everything");

  const [loading, setLoading] = useState(true);

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          newsTheme +
          "&apiKey=803b1f20229542109d3b21b58d162064"
      )
      .then((response) => {
        setArticles(response.data.articles);
        setLoading(false);
      });
  };

  const [articles, setArticles] = useState(() => getTopNews());

  return (
    <NewsContext.Provider
      value={{
        articles: articles,
        loading: loading,
        setNewsTheme: setNewsTheme,
        newsTheme: newsTheme,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
