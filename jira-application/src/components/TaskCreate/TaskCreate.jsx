import React, { useState } from "react";
import "./TaskCreate.css";

function TaskCreate() {
  const [title, setTitle] = useState("");

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  return (
    <div className="task-create">
      <h3>Lütfen Task Ekleyiniz!</h3>
      <form className="task-form">
        <label className="task-label"> Başlık</label>
        <input value={title} onChange={handleChange} className="task-input" />
        <label className="task-label">Task Giriniz!</label>
        <textarea className="task-input" rows={5} />
        <button className="task-button">Oluştur</button>
      </form>
    </div>
  );
}

export default TaskCreate;
