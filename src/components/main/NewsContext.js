import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

const apiKey = process.env.REACT_APP_API_KEY_NEWS_4;

export const NewsProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [articles, setArticles] = useState([]);
  const [newsTheme, setNewsTheme] = useState("everything");

  const todayDate = new Date().toISOString().slice(0, 10);

  useEffect(() => {
    getTopNewsForTheme(newsTheme);
  }, [newsTheme]);

  const changeNewsTheme = (newTheme) => {
    setLoading(true);
    getTopNewsForTheme(newTheme);
  };

  const getTopNewsForTheme = async (newsTheme) => {
    const response = await axios.get(
      "https://newsapi.org/v2/everything?q=" +
        newsTheme +
        "&from=" +
        todayDate +
        "&to=" +
        todayDate +
        "&language=en" +
        "&apiKey=" +
        apiKey
    );
    const responsesWithNoTag = response.data.articles.filter(
      (article) => !article.description.includes("<")
    );
    const responseWithNoTagAndLink = responsesWithNoTag.filter(
      (article) => !article.description.includes("www.")
    );
    console.log(response.data.articles);
    console.log(responseWithNoTagAndLink);
    setArticles(responseWithNoTagAndLink);
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
        setNewsTheme: setNewsTheme,
        changeNewsTheme: changeNewsTheme,
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};
