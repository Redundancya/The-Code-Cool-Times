import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = (props) => {
  const [newsTheme, setNewsTheme] = useState("everything");

  const getTopNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          newsTheme +
          "&apiKey=803b1f20229542109d3b21b58d162064"
      )
      .then((response) => {
        return response.data.articles;
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

  const [news, setNews] = useState(() => {
    getTopNews();
  });

  return (
    <NewsContext.Provider value={[movies, setMovies]}>
      {props.children}
    </NewsContext.Provider>
  );
};
