import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import questions from "./data";
import QuestionCard from "./components/QuestionCard";
const Question = () => {
  return (
    <>
      <QuestionCard>question component</QuestionCard>
      <QuestionCard>question component</QuestionCard>
      <QuestionCard>question component</QuestionCard>
      <QuestionCard>question component</QuestionCard>
    </>
  );
};

export default Question;
