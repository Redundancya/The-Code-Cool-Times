import React, { useContext } from "react";
import { Button } from "@material-ui/core";
import NewsColumn1 from "./main/NewsColumn1";
import Recipe from "./main/Recipe";
import Comics from "./main/Comics";
import Quotes from "./header/Quotes";
import ThemeSwitch from "./header/ThemeSwitch";
import MainNews from "./main/MainNews";
import { NewsContext } from "./main/NewsContext";
import { useTheme } from "../theme/ThemeContext";
import { Nameday } from "./main/Nameday";
import { ThemeProvider } from "styled-components";
import Weather from "./header/Weather"
import { GlobalStyles } from "../theme/GlobalStyles";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date();

export default function Container() {
  const themeDetails = useTheme();
  const context = useContext(NewsContext);

  return (
    <ThemeProvider theme={themeDetails.themeStyles}>
      <GlobalStyles />
      <div className="Container">
        <div className="Grid-item Header-top Header-weather"><Weather /></div>
        <div className="Grid-item Header-top Header-logo logo">
          The Code Cool Times
        <div className="Grid-item Header-top Header-weather"></div>
        <div className="Grid-item Header-top Header-logo FlexColumn">
          <div className="logoSubtitle">
            Your one-stop shop of daily news for your morning coffee
          </div>
          <h1 className="logo">The Code Cool Times</h1>
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
            className="CategorySelector"
            onClick={() => context.setNewsTheme("business")}
            size="small"
          >
            Business
          </Button>
          <Button
            className="CategorySelector"
            onClick={() => context.setNewsTheme("entertainment")}
            size="small"
          >
            Entertainment
          </Button>
          <Button
            className="CategorySelector"
            onClick={() => context.setNewsTheme("health")}
            size="small"
          >
            Health
          </Button>
          <Button
            className="CategorySelector"
            onClick={() => context.setNewsTheme("sciences")}
            size="small"
          >
            Sciences
          </Button>
          <Button
            className="CategorySelector"
            onClick={() => context.setNewsTheme("technology")}
            size="small"
          >
            Technology
          </Button>
        </div>
        <div className="Grid-item Header Header-column-3">
          <Nameday />
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
            © 2021 All Rights Reserved | The Code Cool Times Ltd. | Marta, Tusi
            & Roky
          </h5>
        </div>
      </div>
    </ThemeProvider>
  );
}
