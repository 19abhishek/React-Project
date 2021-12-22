import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./App.css";
function App() {
  const [value, setValue] = useState(0);

  const { id, image, name, title, quote } = data[value];
  return (
    <div>
      <header className="header">Reviews</header>
      <div className="container">
        <button className="btn">
          <FiChevronLeft />
        </button>
        <span className="info">
          <img className="img" src={image} alt="Person" />
          <div className="name">{name}</div>
          <div className="title">{title}</div>
          <div className="quote">{quote}</div>
        </span>
        <button className="btn">
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
