import classes from "./App.module.css";

function App() {
  return (
    <div>
      <div className={classes.calculator}>
        <div className={classes.output}>
          <div className={classes.previousOperand}></div>
          <div className={classes.currentOperand}></div>
        </div>
        <button className={classes.spanTwo}>AC</button>
        <button>DEL</button>
        <button>/</button>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>*</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>+</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
        <button>-</button>
        <button>.</button>
        <button>0</button>
        <button className={classes.spanTwo}>=</button>
      </div>
    </div>
  );
}

export default App;
