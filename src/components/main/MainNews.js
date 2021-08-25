import "../../App.css";
import React, { useState, useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import { NewsContext } from "./NewsContext";
import AuthorButton from "./AuthorButton";
import SourceButton from "./SourceButton";

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
    <div
      style={{
        justifyContent: "center",
        position: "relative",
      }}
    >
      <ButtonGroup
        aria-label="primary button group"
        style={{
          margin: "0 5px 10px 5px",
          // justifyContent: "center",
          width: "100%",
          position: "absolute",
          top: "6px",
          left: "2px",
        }}
      >
        <Button
          variant="contained"
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
          variant="contained"
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

      <div
        className="mainPictureContainer"
        style={{
          background: `url(${context.articles[articlesIndex].urlToImage}) no-repeat center center fixed`,
          backgroundSize: "cover",
          width: "100%",
          height: "40vh",
        }}
      ></div>

      <AuthorButton
        author={
          context.articles[articlesIndex].author
            ? context.articles[articlesIndex].author
            : "No author"
        }
      />
      <a
        className="link"
        href={context.articles[articlesIndex]?.url ?? "Loading..."}
      >
        <h2>{context.articles[articlesIndex]?.title ?? "Title loading..."}</h2>
      </a>
      <p>
        {context.articles[articlesIndex]?.description ?? "Content loading..."}
      </p>
      <SourceButton
        source={context.articles[articlesIndex].source.name}
        sourceUrl={context.articles[articlesIndex]?.url ?? "Loading..."}
      />
    </div>
  );
};

export default MainNews;
