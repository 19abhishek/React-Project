import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";

function App() {
  return (
    <main>
      <header className="header">Our Menu</header>
      <Categories />
    </main>
  );
}

export default App;
