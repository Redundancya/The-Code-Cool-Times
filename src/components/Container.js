import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import NewsColumn1 from "./main/NewsColumn1";
import Recipe from "./main/Recipe";
import Comics from "./main/Comics";
import Quotes from "./header/Quotes";
import ThemeSwitch from "./header/ThemeSwitch";
import MainNews from "./main/MainNews";
import { NewsContext } from "./main/NewsContext";
import axios from "axios";
import { useTheme, useThemeUpdate } from "../ThemeContext";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date();

export default function Container() {
  const context = useContext(NewsContext);

  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const changeNewsTheme = (newTheme) => {
    context.setLoading(true);
    getTopNewsForTheme(newTheme);
  };

  const getTopNewsForTheme = (newTheme) => {
    axios
      .get(
        "https://newsapi.org/v2/everything?q=" +
          newTheme +
          "&apiKey=" +
          context.apiKey
      )
      .then((response) => {
        context.setArticles(response.data.articles);
        context.setLoading(false);
      });
  };

  return (
    <div className={`Container ${darkTheme ? "DarkTheme" : ""}`}>
      <div className="Grid-item Header-top Header-weather">HeaderWeather</div>
      <div className="Grid-item Header-top Header-logo logo">
        The Code Cool Times
      </div>
      <div className="Grid-item Header-top Header-quote">
        <Quotes />
        <ThemeSwitch />
      </div>
      <div className="Grid-item Header Header-column-1">
        <h5>{today.toLocaleDateString("en-US", options)}</h5>
      </div>
      <div className="Grid-item Header Header-column-2">
        <Button
          onClick={() => changeNewsTheme("business")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Business
        </Button>
        <Button
          onClick={() => changeNewsTheme("entertainment")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Entertainment
        </Button>
        <Button
          onClick={() => changeNewsTheme("health")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Health
        </Button>
        <Button
          onClick={() => changeNewsTheme("sciences")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Sciences
        </Button>
        <Button
          onClick={() => changeNewsTheme("technology")}
          size="small"
          style={{
            fontSize: "10px",
            fontFamily: "EB Garamond, sans-serif",
          }}
        >
          Technology
        </Button>
      </div>
      <div className="Grid-item Header Header-column-3">
        <h5>Nameday</h5>
      </div>
      <div className="Grid-item Main Main-column-1">
        <NewsColumn1></NewsColumn1>
      </div>
      <div className="Grid-item Main Main-column-2">
        <NewsColumn1></NewsColumn1>
      </div>
      <div className="Grid-item Main Main-column-3">
        <MainNews />
      </div>
      <div className="Grid-item Main-comic">
        <Comics />
      </div>
      <div className="Grid-item Main Main-column-4">
        <Recipe />
      </div>
      <div className="Grid-item Footer">
        <h5
          style={{
            fontSize: "10px",
          }}
        >
          © 2021 All Rights Reserved | The Code Cool Times Ltd. | Marta, Tusi &
          Roky
        </h5>
      </div>
    </div>
  );
}
