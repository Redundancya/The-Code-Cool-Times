import React from 'react';
import { Button } from '@material-ui/core';
import MainColumn1 from './main/MainColumn1';
import MainColumn2 from './main/MainColumn2';
import Recipe from './main/Recipe';
import Comics from "./main/Comics";
import News from "./main/News";
import Quotes from "./header/Quotes"
import ThemeSwitch from "./header/ThemeSwitch"

const options = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
};
const today = new Date();

export default function Container() {
    return (
        <div className="Container">
            <div className="Grid-item Header-top Header-weather">HeaderWeather</div>
            <div className="Grid-item Header-top Header-logo logo">The Code Cool Times</div>
            <div className="Grid-item Header-top Header-quote">
                < Quotes />
                < ThemeSwitch />
            </div>
            <div className="Grid-item Header Header-column-1">
                <h5>{today.toLocaleDateString("en-US", options)}</h5>
            </div>
            <div className="Grid-item Header Header-column-2">
                <Button
                    size='small'
                    style={{
                        fontSize: '10px',
                        fontFamily: 'EB Garamond, sans-serif'
                    }}>Business</Button>
                <Button
                    size='small'
                    style={{
                        fontSize: '10px',
                        fontFamily: 'EB Garamond, sans-serif',
                    }}>Entertainment</Button>
                <Button
                    size='small'
                    style={{
                        fontSize: '10px',
                        fontFamily: 'EB Garamond, sans-serif'
                    }}>Health</Button>
                <Button
                    size='small'
                    style={{
                        fontSize: '10px',
                        fontFamily: 'EB Garamond, sans-serif'
                    }}>Sciences</Button>
                <Button
                    size='small'
                    style={{
                        fontSize: '10px',
                        fontFamily: 'EB Garamond, sans-serif',
                    }}>Technology</Button>
            </div>
            <div className="Grid-item Header Header-column-3">
            <h5>Nameday</h5>
            </div>
            <div className="Grid-item Main Main-column-1">
                <MainColumn1 />
            </div>
            <div className="Grid-item Main Main-column-2">
            <div className="Grid-item Main Main-column-4"><Recipe /></div>
            <div className="Grid-item Main-comic"><Comics /></div>
                <MainColumn2 /></div>
            <div className="Grid-item Main Main-column-3">
              <React.Fragment>
                 <News />
              </React.Fragment>
            </div>
            <div className="Grid-item Main-bottom">MainBottom</div>
            <div className="Grid-item Footer">
                <h5 style={{
                    fontSize: '10px'
                }}>© 2021 All Rights Reserved | The Code Cool Times Ltd. | Marta, Tusi & Roky</h5>
            </div>
        </div>
    )
}