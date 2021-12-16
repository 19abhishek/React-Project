import React, { useState } from "react";
import reviews from "./data";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Card from "./components/Card";
import classes from "./Review.module.css";
let curr = 0;
const Review = () => {
  const [currImage, setImage] = useState(reviews[curr].image);
  const [currName, setName] = useState(reviews[curr].name);
  const [currProfession, setProfession] = useState(reviews[curr].job);
  const [currText, setText] = useState(reviews[curr].text);

  const leftClickHandler = () => {
    curr--;
    if (curr < 0) {
      curr = reviews.length - 1;
    }
    setImage(reviews[curr].image);
    setName(reviews[curr].name);
    setProfession(reviews[curr].job);
    setText(reviews[curr].text);
  };
  const rightClickHandler = () => {
    curr++;
    if (curr >= reviews.length) {
      curr = 0;
    }
    setImage(reviews[curr].image);
    setName(reviews[curr].name);
    setProfession(reviews[curr].job);
    setText(reviews[curr].text);
  };
  const surpriseHandler = () => {
    curr = Math.floor(Math.random() * reviews.length);
    setImage(reviews[curr].image);
    setName(reviews[curr].name);
    setProfession(reviews[curr].job);
    setText(reviews[curr].text);
  };
  console.log(curr);

  return (
    <Card className={classes.card}>
      <img className={classes.img} src={currImage} alt="Reviewer" />
      <div className={classes.name}>{currName}</div>
      <div className={classes.profession}>{currProfession}</div>
      <div className={classes.review}>{currText}</div>
      <div className={classes.btnContainer}>
        <button onClick={leftClickHandler}>
          <FaChevronLeft />
        </button>
        <button onClick={rightClickHandler}>
          <FaChevronRight />
        </button>
      </div>
      <div className={classes.surprise}>
        <button onClick={surpriseHandler}>Surprise me</button>
      </div>
    </Card>
  );
};

export default Review;
