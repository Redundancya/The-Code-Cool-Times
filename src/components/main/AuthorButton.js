import React from "react";
import Button from "@material-ui/core/Button";

export default function AuthorButton(props) {
  return (
    <Button
      variant="contained"
      size="small"
      style={{
        fontSize: "9px",
        fontFamily: "EB Garamond, sans-serif",
        background: "#eee",
        margin: "4px",
        padding: "2px",
      }}
      disableElevation
      disabled
    >
      {props.author}
    </Button>
  );
}
