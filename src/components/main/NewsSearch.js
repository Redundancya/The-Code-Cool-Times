import "../../App.css";
import React, { useContext, useEffect, useState } from "react";
import { NewsContext } from "./NewsContext";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: 120,
      padding: 0,
      marginLeft: theme.spacing(1),
    },
  },
}));

export default function NewsSearch() {
  const context = useContext(NewsContext);
  const classes = useStyles();
  const [value, setValue] = useState("");

  useEffect(() => {
    const listener = (event) => {
      if (event.code === "Enter" || event.code === "NumpadEnter") {
        event.preventDefault();
        handleSubmit();
      }
    };
    const handleSubmit = () => {
      if (value) {
        context.changeNewsTheme(value);
        context.setLoading(true);
      }

      setValue("");
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [value]);

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        id="outlined-basic"
        label="Search..."
        variant="outlined"
        size="small"
        border="1px solid grey"
        value={value}
        onChange={handleChange}
        inputProps={{
          style: {
            fontSize: 10,
            fontFamily: "'Libre Franklin', sans-serif",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: 10,
            fontFamily: "'Libre Franklin', sans-serif",
          },
        }}
      />
    </form>
  );
}
