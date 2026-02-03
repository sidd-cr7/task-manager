import { useState } from "react";
import DarkVeil from "./components/DarkVeil";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./index.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title) =>
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);

  const toggleTask = (id) =>
    setTasks(tasks.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));

  const deleteTask = (id) =>
    setTasks(tasks.filter(t => t.id !== id));

  return (
    <>
      <DarkVeil />

      <div
        style={{
          minHeight: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 1,
          position: "relative",
        }}
      >
        <div className="task-card">
          <h1>Task Manager</h1>

          <TaskForm onAdd={addTask} />
          <TaskList
            tasks={tasks}
            onToggle={toggleTask}
            onDelete={deleteTask}
          />
        </div>
      </div>
    </>
  );
}

export default App;
