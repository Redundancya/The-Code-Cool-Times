import React from "react";
import Button from "@material-ui/core/Button";

export default function AuthorButton(props) {
  return (
    <Button
      variant="contained"
      size="small"
      style={{
        fontSize: "8px",
        fontFamily: "sans-serif",
        background: "#eee",
        marginBottom: "5px",
      }}
      disableElevation
      disabled
    >
      {props.author}
    </Button>
  );
}
