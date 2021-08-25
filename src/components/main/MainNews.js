import "../../App.css";
import React, { useState, useEffect, useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import placeholder from "../../resources/images/placeholder.png";
import { NewsContext } from "./NewsContext";

export const MainNews = (props) => {
  const context = useContext(NewsContext);
  const [articlesIndex, setArticlesIndex] = useState(0);

  const changeNews = (incrementer) => {
    if (incrementer === "next") {
      setArticlesIndex((articlesIndex + 1) % 19);
    } else {
      setArticlesIndex((articlesIndex + 18) % 19);
    }
  };

  if (context.loading) {
    return <div>Loading....</div>;
  }

  return (
    <div>
      <ButtonGroup size="small" aria-label="primary button group">
        <Button
          disabled={articlesIndex === 0 ? true : false}
          onClick={() => changeNews("previous")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Previous
        </Button>
        <Button
          disabled={articlesIndex === 19 ? true : false}
          onClick={() => changeNews("next")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Next
        </Button>
      </ButtonGroup>
      <img
        className="mainPicture"
        src={context.articles[articlesIndex]?.urlToImage ?? "sajt"}
        alt={context.articles[articlesIndex]?.source?.name ?? "Loading..."}
      />
      <a
        className="link"
        href={context.articles[articlesIndex]?.url ?? "Loading..."}
      >
        <h3>{context.articles[articlesIndex]?.title ?? "Title loading..."}</h3>
      </a>
      <p>
        {context.articles[articlesIndex]?.description ?? "Content loading..."}
      </p>
    </div>
  );
};

export default MainNews;
