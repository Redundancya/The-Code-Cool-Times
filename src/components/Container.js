import React, { useContext } from "react";
import { Button, ButtonGroup } from "@material-ui/core";
import NewsColumn1 from "./main/NewsColumn1";
import NewsColumn2 from "./main/NewsColumn2";
import Comics from "./main/Comics";
import MainNews from "./main/MainNews";
import { NewsContext } from "./main/NewsContext";

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date();

export default function Container() {
  const [news, setNews] = useContext(NewsContext);

  return (
    <div className="Container">
      <div className="Grid-item Header-top Header-weather">HeaderWeather</div>
      <div className="Grid-item Header-top Header-logo logo">
        The Code Cool Times
      </div>
      <div className="Grid-item Header-top Header-quote">HeaderQuote</div>
      <div className="Grid-item Header Header-column-1">
        <h3>{today.toLocaleDateString("en-US", options)}</h3>
      </div>
      <div className="Grid-item Header Header-column-2">
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>World</Button>
          <Button>Politics</Button>
          <Button>Business</Button>
          <Button>Tech</Button>
        </ButtonGroup>
      </div>
      <div className="Grid-item Header Header-column-3">Extra column?</div>
      <div className="Grid-item Main Main-column-1">
        <NewsColumn1></NewsColumn1>
      </div>
      <div className="Grid-item Main Main-column-2">
        <NewsColumn2></NewsColumn2>
      </div>
      <div className="Grid-item Main Main-column-3">
        <React.Fragment>
          <MainNews />
        </React.Fragment>
      </div>
      <div className="Grid-item Main Main-column-4">MainColumn4</div>
      <div className="Grid-item Main-comic">
        <Comics />
      </div>
      <div className="Grid-item Main-bottom">MainBottom</div>
      <div className="Grid-item Footer">Footer</div>
    </div>
  );
}
