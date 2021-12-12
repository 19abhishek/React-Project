import React, { useState } from "react";

import classes from "./Tour.module.css";
import Card from "./components/Card";
import Button from "./components/Button";

const Tour = (props) => {
  return (
    <>
      <img className={classes.img} src={props.image} alt="Place name" />
      <span>{props.name}</span>
      <span>{props.price}</span>
      <p>{props.info}</p>
      <Button>Not Interested</Button>
    </>
  );
};

export default Tour;
