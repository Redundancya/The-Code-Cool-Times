import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

const apiTopNewsUrl =
  "https://newsapi.org/v2/everything?q=everything&pageSize=20&apiKey=";

// const apiKey = "d1f3e37a2d654d0dadc45046a0ab9ec7"; // Roky's
const apiKey = "803b1f20229542109d3b21b58d162064"; // Tusi's

export const NewsProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getTopNews();
  }, []);

  const getTopNews = async () => {
    const response = await axios.get(`${apiTopNewsUrl}${apiKey}`);
    const responsesWithNoTag = response.data.articles.filter(
      (article) => !article.description.includes("</")
    );
    setArticles(responsesWithNoTag);
    setLoading(false);
  };

  return (
    <NewsContext.Provider
      value={{
        articles: articles,
        loading: loading,
        setArticles: setArticles,
        setLoading: setLoading,
        apiKey: apiKey,
      }}
    >
      {props.children}
    </NewsContext.Provider>
  );
};
