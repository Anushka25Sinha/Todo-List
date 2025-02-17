import { useState } from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./styles.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  const addTask = (text, date) => {
    const newTask = { id: Date.now(), text, date, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="app">
      <div className="header">
        <h1>To Do List</h1>

        {/* Three-Dot Menu Button */}
        <div className="menu-container">
          <button className="menu-button" 
          style={{backgroundColor: "rgb(38, 38, 38, 0.7)"}}
          onClick={() => setMenuOpen(!menuOpen)}>
            ...
          </button>

          {menuOpen && (
            <div className="dropdown-menu">
              {/* Search Input */}
              <input
                type="text"
                placeholder="Search task..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              {/* Filter Options */}
              <button onClick={() => setFilter("all")}>All</button>
              <button onClick={() => setFilter("today")}>Today</button>
              <button onClick={() => setFilter("thisWeek")}>This Week</button>
              <button onClick={() => setFilter("thisMonth")}>This Month</button>
            </div>
          )}
        </div>
      </div>

      {/* Task List */}
      <TodoList
        tasks={tasks}
        filter={filter}
        search={search}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
      />

      {/* Add Task */}
      <TodoForm addTask={addTask} />
    </div>
  );
};

export default App;
