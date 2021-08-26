import React from "react";
import Button from "@material-ui/core/Button";

export default function AuthorButton(props) {
  return (
    <Button
      variant="contained"
      size="small"
      style={{
        fontSize: "9px",
        fontFamily: "Libre Franklin, sans-serif",
        background: "#eee",
        color: "#333",
        margin: "4px",
        padding: "2px 6px",
      }}
      disableElevation
      disabled
    >
      {props.author}
    </Button>
  );
}
