import React, { createContext, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

// const TusisApi =
//   "https://newsapi.org/v2/everything?qInTitle=everything&pageSize=20&apiKey=803b1f20229542109d3b21b58d162064";
const RokysApi =
  "https://newsapi.org/v2/everything?qInTitle=everything&pageSize=20&apiKey=d1f3e37a2d654d0dadc45046a0ab9ec7";

export const NewsProvider = (props) => {
  const [loading, setLoading] = useState(true);

  const getTopNews = () => {
    axios
      .get(RokysApi)
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
        setArticles: setArticles,
        setLoading: setLoading,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
