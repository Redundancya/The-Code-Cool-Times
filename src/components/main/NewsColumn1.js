import "../../App.css";
import React, { useState, useContext } from "react";
import { NewsContext } from "./NewsContext";
import AuthorButton from "./AuthorButton";
import SourceButton from "./SourceButton";

export default function NewsColumn1() {
  const context = useContext(NewsContext);
  const [articlesIndex] = useState(Math.floor(Math.random() * 17) + 0);

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
      <a
        className="link"
        href={context.articles[articlesIndex]?.url ?? "Loading..."}
      >
        <h3>{context.articles[articlesIndex]?.title ?? "Title loading..."}</h3>
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
}
