import React, { useState } from "react";
import info from "./data";
import classes from "./App.module.css";
function App() {
  const [value, setValue] = useState(0);
  const [data, setData] = useState([]);

  const changeHandler = (e) => {
    setValue(e.target.value);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setData(info.slice(0, value));
  };
  // console.log(data);
  return (
    <div>
      <header className={classes.header}>TIRED OF BORING LOREM IPSUM?</header>
      <form className={classes.form} onSubmit={formSubmitHandler}>
        <label>Paragraph:</label>
        <input
          className={classes.input}
          type="number"
          min="1"
          max="8"
          step="1"
          onChange={changeHandler}
          value={value}
        />
        <button type="submit" className={classes.btn}>
          Generate
        </button>
      </form>
      <div className={classes.info}>
        {data.map((para, idx) => {
          return (
            <div key={idx}>
              <p>{para}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
