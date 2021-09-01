import "../../App.css";
import React, { useState, useContext, useEffect } from "react";
import { NewsContext } from "./NewsContext";
import AuthorButton from "./AuthorButton";
import SourceButton from "./SourceButton";

export default function NewsColumn1() {
  const context = useContext(NewsContext);
  const [articlesIndex] = useState(Math.floor(Math.random() * 16 - 1));

  useEffect(() => {}, [context.articles]);

  if (context.loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <AuthorButton
        author={context.articles[articlesIndex]?.author ?? "No author"}
      />

      <h3>
        <a
          href={
            context.articles[articlesIndex]?.url ??
            "No article, try another theme"
          }
          target="_blank"
          rel="noreferrer"
        >
          {context.articles[articlesIndex]?.title ?? "No title"}
        </a>
      </h3>

      <p>{context.articles[articlesIndex]?.description ?? "No content Andy"}</p>
      <SourceButton
        source={context?.articles[articlesIndex]?.source?.name ?? "No source"}
        sourceUrl={context.articles[articlesIndex]?.url ?? "No url"}
      />
    </div>
  );
}
