import React from "react";
import "../App.css";

function TodoCreate() {
  return (
    <div className="todo-create">
      <input className="todo-input" type="text" placeholder="Todo giriniz" />
      <button className="todo-button">Todo Oluştur</button>
    </div>
  );
}

export default TodoCreate;
