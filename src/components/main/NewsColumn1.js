import "../../App.css";
import React, { useState, useEffect, useContext } from "react";
import { ButtonGroup, Button } from "@material-ui/core";
import placeholder from "../../resources/images/placeholder.png";
import { NewsContext } from "./NewsContext";

export default function NewsColumn1() {
  const context = useContext(NewsContext);
  const [articlesIndex, setArticlesIndex] = useState(
    Math.floor(Math.random() * 17) + 0
  );

  if (context.loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <a
        className="link"
        href={context.articles[articlesIndex]?.url ?? "Loading..."}
      >
        <h3>{context.articles[articlesIndex]?.title ?? "Title loading..."}</h3>
      </a>
      <p>
        {context.articles[articlesIndex]?.description ?? "Content loading..."}
      </p>

      <h4>
        Author:{" "}
        {context.articles[articlesIndex].author
          ? context.articles[articlesIndex].author
          : "No author"}
      </h4>

      <h4>Source: {context.articles[articlesIndex].source.name}</h4>
    </div>
  );
}
