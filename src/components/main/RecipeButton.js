import React from "react";
import Button from "@material-ui/core/Button";

export default function RecipeButton(props) {
  return (
    <Button
      onClick={props.callback}
      aria-label="outlined primary button group"
      style={{
        background: "#E8FFCC",
        fontFamily: "EB Garamond, sans-serif",
      }}
    >
      {props.text}
    </Button>
  );
}
