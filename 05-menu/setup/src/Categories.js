import React from "react";
import classes from "./Categories.module.css";

const Categories = () => {
  return (
    <nav>
      <ul className={classes.ul}>
        <li className={classes.active}>All</li>
        <li className={classes.active}>Breakfast</li>
        <li>Lunch</li>
        <li>Shakes</li>
      </ul>
    </nav>
  );
};

export default Categories;
