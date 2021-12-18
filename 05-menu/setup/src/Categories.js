import React, { useState } from "react";
import classes from "./Categories.module.css";

const Categories = (props) => {
  const [allState, setAllState] = useState(false);
  const [breakfastState, setBreakfastState] = useState(false);
  const [lunchState, setLunchState] = useState(false);
  const [shakeState, setShakeState] = useState(false);

  const unSetStates = () => {
    setAllState(false);
    setBreakfastState(false);
    setLunchState(false);
    setShakeState(false);
  };

  const allHandler = () => {
    props.filterItem("all");
    unSetStates();
    setAllState(true);
  };

  const breakfastHandler = () => {
    props.filterItem("breakfast");
    unSetStates();
    setBreakfastState(true);
  };

  const lunchHandler = () => {
    props.filterItem("lunch");
    unSetStates();
    setLunchState(true);
  };

  const shakesHandler = () => {
    props.filterItem("shakes");
    unSetStates();
    setShakeState(true);
  };

  return (
    <nav>
      <ul className={classes.ul}>
        <li onClick={allHandler} className={allState ? classes.active : ""}>
          All
        </li>
        <li
          onClick={breakfastHandler}
          className={breakfastState ? classes.active : ""}
        >
          Breakfast
        </li>
        <li onClick={lunchHandler} className={lunchState ? classes.active : ""}>
          Lunch
        </li>
        <li
          onClick={shakesHandler}
          className={shakeState ? classes.active : ""}
        >
          Shakes
        </li>
      </ul>
    </nav>
  );
};

export default Categories;
