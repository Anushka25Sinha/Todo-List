const TodoItem = ({ task, deleteTask, toggleTaskCompletion }) => {
    return (
      <div className="todo-item">
        <input 
          type="checkbox" 
          checked={task.completed} 
          onChange={() => toggleTaskCompletion(task.id)} 
        />
        <div className="task-content">
        <span className={`task-text ${task.completed ? "completed" : ""}`}>
          {task.text}
        </span>
        <span className="task-date">{task.date}</span>
        </div>
        
        <button onClick={() => deleteTask(task.id)}>🗑️</button>
      </div>
    );
  };
  
  export default TodoItem;
  
  