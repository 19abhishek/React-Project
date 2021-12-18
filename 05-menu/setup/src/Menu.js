import React from "react";
import items from "./data";
import Card from "./components/Card";
import classes from "./Menu.module.css";

const renderFood = (foodItems) => {
  return foodItems.map((item) => {
    return (
      <Card key={item.id}>
        <img src={item.img} alt="Food" className={classes.img} />
        <div className={classes.foodInfo}>
          <div className={classes.header}>
            <span>{item.title}</span>
            <span>${item.price}</span>
          </div>
          <div className={classes.description}>{item.desc}</div>
        </div>
      </Card>
    );
  });
};

const Menu = (props) => {
  let foodItems;
  let items = props.items;

  foodItems = renderFood(items);

  const allHandler = () => {
    return items;
  };

  const breakfastHandler = () => {
    const breakfastItems = items.filter((item) => {
      return item.category === "breakfast";
    });
  };

  const lunchHandler = () => {
    const lunchItems = items.filter((item) => {
      return item.category === "lunch";
    });
  };

  const shakesHandler = () => {
    const shakesItems = items.filter((item) => {
      return items.category === "shakes";
    });
  };

  return <main>{foodItems}</main>;
};

export default Menu;
