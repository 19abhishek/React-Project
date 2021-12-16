import React, { Fragment } from "react";
import Review from "./Review";
import classes from "./App.module.css";
function App() {
  return (
    <Fragment>
      <header className={classes.header}>Our Reviews</header>
      <Review />
    </Fragment>
  );
}

export default App;
