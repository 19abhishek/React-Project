import React, { useState, useEffect } from "react";
import Card from "./components/Card";
import classes from "./App.module.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function App() {
  const [currItem, setCurrItem] = useState("");
  const [items, setItems] = useState([]);
  const [hasItems, setHasItems] = useState(items.length > 0);
  const [message, setMessage] = useState("");
  const [hasMessage, setHasMessage] = useState(message.length > 0);
  const [itemAdded, setItemAdded] = useState(false);
  const [itemMessage, setItemMessage] = useState("");
  const [beforeEditValue, setBeforeEditingValue] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (beforeEditValue.length > 0) {
      const idx = items.indexOf(beforeEditValue);
      items[idx] = currItem;
      setBeforeEditingValue("");
    } else {
      setItems([...items, currItem]);
    }
    setCurrItem("");
    setItemAdded(true);
    setItemMessage("Item Added");
    setTimeout(() => {
      setItemMessage("");
      setItemAdded(false);
    }, 2000);
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

  const editClickHandler = (idx) => {
    const val = items[idx];
    setCurrItem(val);
    setBeforeEditingValue(val);
    // console.log(this);
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
      {itemAdded && <div className={classes.added}>{itemMessage}</div>}
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
                <button onClick={editClickHandler.bind(this, idx)}>
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
