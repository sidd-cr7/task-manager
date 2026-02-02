export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="task-item">
      <span className={task.completed ? "completed" : ""}>
        {task.title}
      </span>

      <div className="task-actions">
        <button
          className="complete"
          onClick={() => onToggle(task.id)}
        >
          {task.completed ? "Undo" : "Done"}
        </button>
        <button
          className="delete"
          onClick={() => onDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
