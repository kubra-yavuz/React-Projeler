import React from "react";
import TaskShow from "../TaskShow/TaskShow";
import "./TaskList.css";

function TaskList({ tasks, onDelete }) {
  return (
    <div className="task-list">
      {tasks.map((task, index) => {
        return <TaskShow key={task.id} task={task} onDelete={onDelete} />;
      })}
    </div>
  );
}

export default TaskList;
