import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import Card from "./components/Card";
import classes from "./App.module.css";
import Question from "./Question";
function App() {
  return (
    <Card>
      <div className={classes.header}>Questions and Answers about Login</div>
      <Question className={classes.questionCard} />
    </Card>
  );
}

export default App;
