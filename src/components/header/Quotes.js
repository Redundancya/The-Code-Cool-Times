import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const quoteApiUrl = "http://quotes.stormconsultancy.co.uk/random.json";
const maxQuoteLength = 90;

export default function Quotes() {
  const [randomQuote, setRandomQuote] = useState({});

  const getQuoteWithShortLength = useCallback(() => {
    axios.get(quoteApiUrl).then((res) => {
      if (res.data.quote.length > maxQuoteLength) {
        getQuoteWithShortLength();
      } else {
        setRandomQuote(res.data);
      }
    });
  }, []);

  useEffect(() => {
    getQuoteWithShortLength();
  }, [getQuoteWithShortLength]);

  return (
    <div className="QuoteContainer">
      <h5 style={{ textAlign: "center" }}>{randomQuote.quote}</h5>
    </div>
  );
}
