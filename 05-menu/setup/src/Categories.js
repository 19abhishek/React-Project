import React from "react";
import classes from "./Categories.module.css";

const Categories = (props) => {
  return (
    <nav>
      <ul className={classes.ul}>
        <li>All</li>
        <li>Breakfast</li>
        <li>Lunch</li>
        <li>Shakes</li>
      </ul>
    </nav>
  );
};

export default Categories;
