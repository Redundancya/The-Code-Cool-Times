import "../../App.css";
import React, { useState, useEffect, useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import placeholder from "../../resources/images/placeholder.png";
import { NewsContext } from "./NewsContext";

export const MainNews = (props) => {
  const [articles, setArticles] = useContext(NewsContext);
  const [articleIndex, setArticleIndex] = useState(0);

  let newsIndex;

  const changeNews = (incrementer) => {
    if (incrementer === "next") {
      setArticleIndex((articleIndex + 1) % 19);
    } else {
      setArticleIndex((articleIndex + 18) % 19);
    }
  };

  return (
    <div>
      {console.log(articles)}
      {articles.map((oneNews) => (
        <p>{oneNews.name}</p>
      ))}
    </div>
  );
  //   <div>
  //   <img
  //     className="mainPicture"
  //     src={articles[articlesIndex].urlToImage}
  //     alt={articles[articlesIndex]?.source?.name ?? "Loading..."}
  //   />
  //   <a className="link" href={articles[articlesIndex]?.url ?? "Loading..."}>
  //     <h3>{articles[articlesIndex]?.title ?? "Title loading..."}</h3>
  //   </a>
  //   <p>{articles[articlesIndex]?.description ?? "Content loading..."}</p>

  //   <ButtonGroup size="small" aria-label="primary button group">
  //     <Button
  //       disabled={articlesIndex === 0 ? true : false}
  //       onClick={() => changeNews("previous")}
  //       size="small"
  //       style={{
  //         fontSize: "10px",
  //         fontFamily: "EB Garamond, sans-serif",
  //       }}
  //     >
  //       Previous
  //     </Button>
  //     <Button
  //       disabled={articlesIndex === 19 ? true : false}
  //       onClick={() => changeNews("next")}
  //       size="small"
  //       style={{
  //         fontSize: "10px",
  //         fontFamily: "EB Garamond, sans-serif",
  //       }}
  //     >
  //       Next
  //     </Button>
  //   </ButtonGroup>
  // </div>
  // );
};

export default MainNews;
