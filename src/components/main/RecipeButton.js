import React from "react";
import Button from "@material-ui/core/Button";

export default function RecipeButton(props) {
  return (
    <Button
      onClick={props.callback}
      aria-label="outlined primary button group"
      style={{
        fontSize: "14px",
        background: "#E8FFCC",
        fontFamily: "Libre Franklin, sans-serif",
        marginTop: "8px",
        padding: "2px 6px",
      }}
    >
      {props.text}
    </Button>
  );
}
