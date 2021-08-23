import "./App.css";
import Comics from "./components/Comics";

export default function App() {

  return (
    <div className="App">
      <div className="Container">
        <div className="Grid-item Header-top Header-weather">HeaderWeather</div>
        <div className="Grid-item Header-top Header-logo"><h1>The Code Cool Times</h1></div>
        <div className="Grid-item Header-top Header-quote">HeaderQuote</div>
        <div className="Grid-item Header Header-date">HeaderDate</div>
        <div className="Grid-item Header Header-nameday">HeaderNameday</div>
        <div className="Grid-item Main Main-column-1">MainColumn1</div>
        <div className="Grid-item Main Main-column-2">MainColumn2</div>
        <div className="Grid-item Main Main-column-3">MainColumn3</div>
        <div className="Grid-item Main Main-column-4">MainColumn4</div>
        <div className="Grid-item Main-comic"><Comics /></div>
        <div className="Grid-item Main-bottom">MainBottom</div>
        <div className="Grid-item Footer">Footer</div>
      </div>
      
    </div>
  );

}
