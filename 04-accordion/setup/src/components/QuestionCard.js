import React from "react";
import classes from "./QuestionCard.module.css";

const QuestionCard = (props) => {
  return <div className={classes.questionCard}>{props.children}</div>;
};

export default QuestionCard;
