import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import Card from "./components/Card";
import classes from "./App.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [currItem, setCurrItem] = useState("");
  const [items, setItems] = useState([]);
  const [hasItems, setHasItems] = useState(items.length > 0);
  const [message, setMessage] = useState("");
  const [hasMessage, setHasMessage] = useState(message.length > 0);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setItems([...items, currItem]);
    setCurrItem("");
  };

  const inputChangeHandler = (e) => {
    setCurrItem(e.target.value);
  };

  const deleteClickHandler = (idx) => {
    const newItem = items.filter((item, index) => {
      if (idx !== index) {
        return item;
      }
    });
    setItems(newItem);
    setMessage("Item Deleted");
    setHasMessage(true);
    setTimeout(() => {
      setHasMessage(false);
      setMessage("");
    }, 2000);
  };

  const clearAllHandler = () => {
    setItems([]);
  };

  useEffect(() => {
    setHasItems(items.length > 0);
  }, [items]);

  return (
    <Card className={classes.card}>
      {hasMessage && <div className={classes.error}>{message}</div>}
      <header className={classes.header}>Grocery Bud</header>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <input
          className={classes.input}
          placeholder="e.g eggs"
          type="text"
          value={currItem}
          onChange={inputChangeHandler}
        />
        <button className={classes.btn}>Submit</button>
      </form>
      <div>
        {items.map((item, idx) => {
          return (
            <div key={idx} className={classes.item}>
              <span>{item}</span>
              <div>
                <button>
                  <FaEdit className={classes.editBtn} />
                </button>
                <button onClick={deleteClickHandler.bind(null, idx)}>
                  <FaTrash className={classes.trashBtn} />
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className={classes.clear}>
        {hasItems && (
          <button className={classes.clearBtn} onClick={clearAllHandler}>
            Clear Items
          </button>
        )}
      </div>
    </Card>
  );
}

export default App;
