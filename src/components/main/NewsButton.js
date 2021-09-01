import "../../App.css";
import React, { useContext, useEffect } from "react";
import { NewsContext } from "./NewsContext";
import { Button } from "@material-ui/core";

export default function NewsButton({ newsTheme }) {
  const context = useContext(NewsContext);

  useEffect(() => {}, [context.articles]);

  return (
    <Button
      className="CategorySelector"
      onClick={() => context.changeNewsTheme(newsTheme)}
      size="small"
    >
      {newsTheme}
    </Button>
  );
}
