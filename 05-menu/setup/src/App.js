import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import item from "./data";

const allCategories = ["all", ...new Set(item.map((cItem) => cItem.category))];

function App() {
  const foodItems = item;
  const [items, setItems] = useState(foodItems);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    console.log(category);
    if (category === "all") {
      setItems(foodItems);
      return;
    }
    setItems(foodItems.filter((cItem) => cItem.category === category));
  };

  return (
    <main>
      <header className="header">Our Menu</header>
      <Categories categories={categories} filterItem={filterItems} />
      <Menu items={items} />
    </main>
  );
}

export default App;
