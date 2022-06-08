import React,{useState} from "react";
import styles from "./counter.module.css";

const Counter = () => {
const [count, setcount] = useState(0);
// const [sub,setsub] = useState(1)
  // sample value to be replaced
 const HandleChange = (value) => {
   setcount(count+value)
   console.log(count)
 }
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.counter}>
      <button
        data-testid="task-counter-increment-button"
        onClick={() => {
          HandleChange(1);
        }}
      >
        +
      </button>
      <span data-testid="task-counter-value" >{ count<= 1 ? 1 : count}</span>
      <button
        data-testid="task-counter-decrement-button"
        onClick={() => {
          HandleChange(-1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
