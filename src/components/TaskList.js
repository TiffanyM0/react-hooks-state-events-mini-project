import React from "react";
import Task from "./Task";

function TaskList({tasks, onTaskDelete }) {
  // console.log(TASKS)
  function handleDelete(id){
    onTaskDelete(tasks.filter((task) => task.id !== id))
  }
  return (
    <div className="tasks">
      {tasks.map((task)=> (<Task key={task.id} task={task} onTaskDelete={handleDelete}/>
        // console.log(index)
        // console.log(TASKS)
      ))}
      {/* display a list of tasks using Task component */}
    </div>
  );
}

export default TaskList;
