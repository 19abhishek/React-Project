import React from "react";

import classes from "./Tour.module.css";
import Button from "./components/Button";

const Tour = (props) => {
  return (
    <>
      <img className={classes.img} src={props.image} alt="Place name" />
      <div className={classes.title}>
        <span>{props.name}</span>
        <span>{props.price}</span>
      </div>
      <p>{props.info}</p>
      <Button className={classes.btn} onClick={props.remove}>
        Not Interested
      </Button>
    </>
  );
};

export default Tour;
