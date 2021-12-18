import React from "react";
import classes from "./Categories.module.css";

const Categories = (props) => {
  const classStatus = "";
  const allHandler = () => {
    props.filterItem("all");
  };

  const breakfastHandler = () => {
    props.filterItem("breakfast");
  };

  const lunchHandler = () => {
    props.filterItem("lunch");
  };

  const shakesHandler = () => {
    props.filterItem("shakes");
  };

  return (
    <nav>
      <ul className={classes.ul}>
        <li onClick={allHandler}>All</li>
        <li onClick={breakfastHandler}>Breakfast</li>
        <li onClick={lunchHandler}>Lunch</li>
        <li onClick={shakesHandler}>Shakes</li>
      </ul>
    </nav>
  );
};

export default Categories;
