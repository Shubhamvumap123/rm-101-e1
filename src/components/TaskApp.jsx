import React,{useState} from "react";

import styles from "./taskApp.module.css";
import{Tasks} from "./Tasks"
import {AddTask} from "./AddTask"
import { TaskHeader } from "./TaskHeader";
import data from "../data/tasks.json"
import {v4 as uuidv4} from 'uuid'
const TaskApp = () => {
  const [items,setItems] = useState("");
  const [tasks,setTasks] = useState(data); 

  const handleChange = (e)=>{
    setItems(e.target.value);
  }

  const submitTask = () =>{
    setTasks([...tasks,{"id":uuidv4(),"text":items,"done":false,"count":1}])
    console.log(tasks);
    setItems("");
  }
  const deleteTask = (id) => {
    console.log(id);
    setTasks(tasks.filter((tasks) => tasks.text != id));
  };
  // NOTE: do not delete `data-testid` key value pair
  return (
    <div data-testid="task-app" className={styles.taskApp}>
      {/* Header */}
      <TaskHeader task={tasks} />
      <AddTask
        handleChange={handleChange}
        submitTask={submitTask}
        values={items}
      />
      <Tasks tasks={tasks} deleteTask={deleteTask} />
    </div>
  );
};

export default TaskApp;
