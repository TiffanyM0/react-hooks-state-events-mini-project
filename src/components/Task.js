import React from "react";

function Task({task, onTaskDelete}) {
  console.log(task)

  function handleDelete(){
    onTaskDelete(task.id)
  }

  return (
    <div className="task">
      <div className="label">{task.category}</div>
      <div className="text">{task.text}</div>
      <button className="delete" onClick={handleDelete}>X</button>
    </div>
  );
}

export default Task;