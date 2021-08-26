import React from "react";
import Button from "@material-ui/core/Button";

export default function RecipeButton(props) {
  return (
      <Button
        onClick={props.callback}
        aria-label="outlined primary button group"
        style={{
          background: "#E8FFCC",         
        }}>
            {props.text}
      </Button>
  );
}
