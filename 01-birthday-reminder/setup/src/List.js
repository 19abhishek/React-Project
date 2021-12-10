import React from "react";

import Button from "./components/Button/Button";
import classes from "./List.module.css";
import data from "./data";

const List = () => {
  const dataItem = data;
  const dataNum = dataItem.length;
  return (
    <React.Fragment>
      <h3>{`${dataNum} Birthdays Today`}</h3>

      <Button className={classes.btn}>Clear All</Button>
    </React.Fragment>
  );
};

export default List;
