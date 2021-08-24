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

      <a
        className="link"
        href={context.articles[articlesIndex + 1]?.url ?? "Loading..."}
      >
        <h3>
          {context.articles[articlesIndex + 1]?.title ?? "Title loading..."}
        </h3>
      </a>
      <p>
        {context.articles[articlesIndex + 1]?.description ??
          "Content loading..."}
      </p>

      <a
        className="link"
        href={context.articles[articlesIndex + 2]?.url ?? "Loading..."}
      >
        <h3>
          {context.articles[articlesIndex + 2]?.title ?? "Title loading..."}
        </h3>
      </a>
      <p>
        {context.articles[articlesIndex + 2]?.description ??
          "Content loading..."}
      </p>
    </div>
  );
}
