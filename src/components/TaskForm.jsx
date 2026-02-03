import { useState } from "react";

export default function TaskForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Task title is required");
      return;
    }
    onAdd(title);
    setTitle("");
    setError("");
  };

  return (
    <>
      <form className="task-form" onSubmit={submit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          class="search-bar"
          placeholder="Add a new task..."
        />
        <button class="button">Add Task
</button>
      </form>
      {error && <div style={{ color: "#f87171" }}>{error}</div>}
    </>
  );
}
