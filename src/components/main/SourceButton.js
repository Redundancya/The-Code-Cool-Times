import React from "react";
import Button from "@material-ui/core/Button";

export default function SourceButton(props) {
  return (
    <a href={props.sourceUrl} rel="noreferrer" target="_blank">
      <Button
        variant="contained"
        size="small"
        style={{
          fontSize: "10px",
          fontFamily: "EB Garamond, sans-serif",
          background: "#E8FFCC",
        }}
        disableElevation
      >
        {props.source}
      </Button>
    </a>
  );
}
