import React from "react";
import styles from "./tasks.module.css";
import {Task} from "../Task"
import { v4 as uuidv4 } from "uuid";
const Tasks = ({ tasks, deleteTask }) => {
  // NOTE: do not delete `data-testid` key value pair
  return (
    <>
      <ul data-testid="tasks" className={styles.tasks}>
        {tasks.map((e) => (
          <Task task={e} key={uuidv4()} deleteTask={deleteTask} />
        ))}
      </ul>
      <div data-testid="tasks-empty" className={styles.empty}>
        {/* Show when No Tasks are present */}
      </div>
    </>
  );
};

export default Tasks;
