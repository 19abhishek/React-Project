import React from "react";

import classes from "./ListItem.module.css";

const ListItem = (props) => {
  return (
    <>
      <img src={props.url} alt="Profile" className={classes.img} />
      <span>{props.name}</span>
      <span>{props.age}</span>
    </>
  );
};

export default ListItem;
