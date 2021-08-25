import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Quotes() {
  const [quotes, setQuotes] = useState([
    {
      text: "",
      author: "",
    },
  ]);

  const [randomQuote, setRandomQuote] = useState("");

  useEffect(() => {
    if (quotes[0].text === "") {
      axios
        .get("https://type.fit/api/quotes")
        .then((res) => {
          setQuotes(res.data);
        })
        .catch(function (error) {
          console.error(error);
        });
      console.log("fetched");
    } else {
      setRandomQuote(getRandomQuote());
      return setRandomQuote;
    }
  }, [quotes]);

  const getRandomQuote = () => {
    return quotes[Math.floor(Math.random() * quotes.length)].text;
  };

  return (
    <div className="QuoteContainer">
      <h5
        style={{
          textAlign: "center",
        }}
      >
        {randomQuote}
      </h5>
    </div>
  );
}
