import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import Card from "./components/Card";
import classes from "./App.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [items, setItems] = useState(["Egg", "Bread"]);
  const [hasItems, setHasItems] = useState(items.length > 0);
  const message = "xajnsjnkajsn";
  return (
    <Card className={classes.card}>
      {/* <div className={classes.error}>{message}</div> */}
      <header className={classes.header}>Grocery Bud</header>
      <form className={classes.form}>
        <input className={classes.input} placeholder="e.g eggs" type="text" />
        <button className={classes.btn}>Submit</button>
      </form>
      <div>
        {items.map((item) => {
          return (
            <div className={classes.item}>
              <span>{item}</span>
              <div>
                <button>
                  <FaEdit />
                </button>
                <button>
                  <FaTrash />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.clear}>
        {hasItems && <button className={classes.clearBtn}>Clear Items</button>}
      </div>
    </Card>
  );
}

export default App;
