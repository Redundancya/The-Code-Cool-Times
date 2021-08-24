import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function Quotes() {
    
    const [quotes, setQuotes] = useState(
      [ {
        text: '',
        author: ''
      }
      ]);

    const [randomQuote, setRandomQuote] = useState('');

    useEffect(() => {
        axios.get('https://type.fit/api/quotes')
        .then((res) => {
          setQuotes(res.data);
        })
        .then(() => {
          console.log(quotes);
        })
        .catch(function (error) {
            console.error(error);
        });     

    }, []);

    const getRandomQuote = () => {
      return quotes[Math.floor(Math.random() * quotes.length)].text
    };

    return (
        <div className="QuoteContainer">
          <h5 style={{
            textAlign: 'center',
          }}>
            { getRandomQuote() }
            </h5>
        </div>
    )
}
