import "../../App.css";
import React, { useState, useEffect, useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import placeholder from "../../resources/images/placeholder.png";
import { NewsContext } from "./NewsContext";

export const MainNews = (props) => {
  const [news, setNews] = useContext(NewsContext);

  let newsIndex;

  return (
    <div>
      {console.log(news)}
      {news.map((oneNews) => (
        <p>{oneNews.name}</p>
      ))}
    </div>
  );
};

export default MainNews;
