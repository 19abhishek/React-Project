import React from "react";

import Tour from "./Tour";
import classes from "./Tours.module.css";

const url = "https://course-api.com/react-tours-project";
const Tours = () => {
  return (
    <React.Fragment>
      <header className={classes.header}>Our Tours</header>
    </React.Fragment>
  );
};

export default Tours;
