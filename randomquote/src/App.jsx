import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState("");
  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((response) => response.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      })
      .catch((error) => {
        console.error("Bir hata meydana geldi.:", error);
      });
  };
  useEffect(() => {
    getQuote();
  }, []);
  return (
    <div className="App">
      <div className="quote">
        <p>"{quotes.text}"</p>
        <p>{quotes.author}</p>
        <div className="btnContainer">
          <button onClick={getQuote} className="btn">
            Get Quote
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
