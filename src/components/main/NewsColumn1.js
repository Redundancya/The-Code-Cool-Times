import "../../App.css";
import React, { useState, useContext } from "react";
import { NewsContext } from "./NewsContext";
import AuthorButton from "./AuthorButton";
import SourceButton from "./SourceButton";

export default function NewsColumn1() {
  const context = useContext(NewsContext);
  const articlesIndex = Math.floor(Math.random() * 16 - 1) + 0;

  if (context.loading) {
    return <div>Loading....</div>;
  }
  return (
    <div>
      <AuthorButton
        author={
          context.articles[articlesIndex].author
            ? context.articles[articlesIndex].author
            : "No author"
        }
      />

      <h3>
        <a
          href={context.articles[articlesIndex]?.url ?? "Loading..."}
          target="_blank"
          rel="noreferrer"
        >
          {context.articles[articlesIndex]?.title ?? "Title loading..."}
        </a>
      </h3>

      <p>
        {context.articles[articlesIndex]?.description ?? "Content loading..."}
      </p>
      <SourceButton
        source={context.articles[articlesIndex].source.name}
        sourceUrl={context.articles[articlesIndex]?.url ?? "Loading..."}
      />
    </div>
  );
}
