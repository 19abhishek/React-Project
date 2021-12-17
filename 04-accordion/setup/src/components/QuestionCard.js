import React, { useState } from "react";
import classes from "./QuestionCard.module.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const QuestionCard = (props) => {
  const [infoStatus, setStatus] = useState(false);

  const statusHandler = () => {
    setStatus(!infoStatus);
  };

  return (
    <div className={classes.questionCard}>
      <div className={classes.title}>
        {props.title}
        {!infoStatus && (
          <button onClick={statusHandler}>
            <AiOutlinePlus />
          </button>
        )}
        {infoStatus && (
          <button onClick={statusHandler}>
            <AiOutlineMinus />
          </button>
        )}
      </div>
      {infoStatus && <div className={classes.info}>{props.info}</div>}
    </div>
  );
};

export default QuestionCard;
