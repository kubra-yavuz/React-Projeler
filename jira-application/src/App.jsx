import "./App.css";
import TaskCreate from "./components/TaskCreate/TaskCreate";
import TaskList from "./components/TaskList/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, taskDesc) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      taskDesc,
    });
    console.log(response);
    const createdTasks = [
      ...tasks,
      {
        id: Math.round(Math.random() * 999999),
        title: title,
        taskDesc: taskDesc,
      },
    ];
    setTasks(createdTasks);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const DeleteTaskById = async (id) => {
    const response = await axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };
  const editTaskById = async (id, updatedTitle, updatedTaskDesc) => {
    const response = await axios.get(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      taskDesc: updatedTaskDesc,
    });
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: updatedTitle, taskDesc: updatedTaskDesc };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={DeleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
