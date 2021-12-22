import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaChevronLeft, FaQuoteRight } from "react-icons/fa";
import data from "./data";
import "./App.css";
function App() {
  const [value, setValue] = useState(0);

  const leftClickHandler = () => {
    if (value === 0) {
      setValue(data.length - 1);
    } else {
      const x = value - 1;
      setValue(x);
    }
  };
  const rightClickHandler = () => {
    if (value === data.length - 1) {
      setValue(0);
    } else {
      const x = value + 1;
      setValue(x);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (value === data.length - 1) {
        setValue(0);
      } else {
        const x = value + 1;
        setValue(x);
      }
    }, 3000);
    return () => clearInterval(interval);
  }, [value]);

  const { id, image, name, title, quote } = data[value];
  return (
    <div>
      <header className="header">Reviews</header>
      <div className="container">
        <button className="btn" onClick={leftClickHandler}>
          <FiChevronLeft />
        </button>
        <span className="info">
          <img className="img" src={image} alt="Person" />
          <div className="name">{name}</div>
          <div className="title">{title}</div>
          <div className="quote">{quote}</div>
        </span>
        <button className="btn" onClick={rightClickHandler}>
          <FiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default App;
