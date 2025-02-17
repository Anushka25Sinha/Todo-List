import TodoItem from "./TodoItem";

const TodoList = ({ tasks, filter, search, deleteTask, toggleTaskCompletion }) => {
  const today = new Date().toISOString().split("T")[0];

  const filterTasks = (task) => {
    const taskDate = new Date(task.date);

    if (filter === "all") return true;

    if (filter === "today") {
      return task.date === today;
    }

    if (filter === "thisWeek") {
      const weekFromNow = new Date();
      weekFromNow.setDate(weekFromNow.getDate() + 7);
      return taskDate >= new Date(today) && taskDate <= weekFromNow;
    }

    if (filter === "thisMonth") {
      return (
        taskDate.getFullYear() === new Date().getFullYear() &&
        taskDate.getMonth() === new Date().getMonth()
      );
    }

    return true;
  };

  return (
    <div className="todo-list">
      {tasks
        .filter((task) => filterTasks(task) && task.text.toLowerCase().includes(search.toLowerCase()))
        .map((task) => (
          <TodoItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            toggleTaskCompletion={toggleTaskCompletion}
          />
        ))}
    </div>
  );
};

export default TodoList;

