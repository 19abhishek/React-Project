import React from "react";
import items from "./data";
import Card from "./components/Card";
import classes from "./Menu.module.css";

const renderFood = (foodItems) => {
  foodItems.map((item) => {
    return (
      <Card key={item.id}>
        <img src={item.img} alt="Food" />
        <title>{item.title}</title>
        <div>${item.price}</div>
      </Card>
    );
  });
};

const Menu = () => {
  let foodItems;

  foodItems = items.map((item) => {
    return (
      <Card key={item.id}>
        <img src={item.img} alt="Food" />
        <title>{item.title}</title>
        <div>${item.price}</div>
      </Card>
    );
  });

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
