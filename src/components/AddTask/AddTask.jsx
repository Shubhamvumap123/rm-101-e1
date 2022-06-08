import React from "react";
import styles from "./addTask.module.css";

const AddTask = ({handleChange,submitTask,values}) => {
 
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div className={styles.todoForm}>
      <input data-testid="add-task-input" type="text" onChange={handleChange} value={values}/>
      <button disable={!values} data-testid="add-task-button" onClick={submitTask}>+</button>
    </div>
  );
};

export default AddTask;
