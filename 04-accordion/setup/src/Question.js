import React, { useState } from "react";

import questions from "./data";
import QuestionCard from "./components/QuestionCard";
import classes from "./Question.module.css";
const Question = () => {
  const questionList = questions.map((question) => {
    return (
      <QuestionCard
        key={question.id}
        title={question.title}
        info={question.info}
      />
    );
  });
  return <div>{questionList}</div>;
};

export default Question;
