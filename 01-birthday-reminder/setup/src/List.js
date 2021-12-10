import React, { useState } from "react";

import Button from "./components/Button/Button";
import classes from "./List.module.css";
import data from "./data";
import ListItem from "./components/ListItem";

const List = () => {
  const dataItem = data;
  const [isChecked, setCheck] = useState(true);
  const [dataNum, setNumValue] = useState(dataItem.length);

  const clearHandler = () => {
    setCheck(false);
    setNumValue(0);
  };

  const LI = dataItem.map((item) => {
    return (
      <ListItem
        key={item.id}
        url={item.image}
        name={item.name}
        age={item.age}
      />
    );
  });

  return (
    <React.Fragment>
      <h3>{`${dataNum} Birthdays Today`}</h3>
      {isChecked && (
        <div>
          <ul>
            {LI.map((list) => (
              <li key={Math.random()}>{list}</li>
            ))}
          </ul>
        </div>
      )}
      <Button className={classes.btn} onClick={clearHandler}>
        Clear All
      </Button>
    </React.Fragment>
  );
};

export default List;
