import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";

const quoteApiUrl = "http://localhost:8080/quote/v1/random";

export default function Quotes() {
  const [randomQuote, setRandomQuote] = useState({});

  useEffect(() => {
    axios.get(quoteApiUrl).then((res) => {
      setRandomQuote(res.data);
    });
  }, []);

  return (
    <div className="QuoteContainer">
      <h5 style={{ textAlign: "center" }}>{randomQuote.quote}</h5>
    </div>
  );
}
