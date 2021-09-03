import React from "react";
import NewsColumn1 from "./main/NewsColumn1";
import Recipe from "./main/Recipe";
import Comics from "./main/Comics";
import Quotes from "./header/Quotes";
import ThemeSwitch from "./header/ThemeSwitch";
import MainNews from "./main/MainNews";
import { useTheme } from "../theme/ThemeContext";
import { Nameday } from "./main/Nameday";
import { ThemeProvider } from "styled-components";
import Weather from "./header/Weather";
import { GlobalStyles } from "../theme/GlobalStyles";
import NewsButton from "./main/NewsButton";
import NewsSearch from "./main/NewsSearch";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date();

export default function Container() {
  const themeDetails = useTheme();

  return (
    <ThemeProvider theme={themeDetails.themeStyles}>
      <GlobalStyles />
      <div className="Container">
        <div className="Grid-item Header-top Header-weather">
          <Weather />
        </div>
        <div className="Grid-item Header-top Header-logo FlexColumn">
          <div className="logoSubtitle">
            The one-stop shop of daily news for your morning coffee
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
          <NewsButton newsTheme="business"></NewsButton>
          <NewsButton newsTheme="health"></NewsButton>
          <NewsButton newsTheme="sciences"></NewsButton>
          <NewsButton newsTheme="technology"></NewsButton>
          <NewsSearch />
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
