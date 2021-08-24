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

  const [movies, setMovies] = useState([
    {
      name: "Harry Potter",
      price: "10",
      id: 2314,
    },
    {
      name: "Game of Thrones",
      price: "10",
      id: 2333,
    },
  ]);

  const [articles, setArticles] = useState(() => getTopNews());

  return (
    <NewsContext.Provider value={{ articles: articles, loading: loading }}>
      {props.children}
    </NewsContext.Provider>
  );
};
