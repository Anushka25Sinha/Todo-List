import { useState } from "react";

const TodoForm = ({ addTask }) => {
  const [text, setText] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim() && date) {
      addTask(text, date);
      setText("");
      setDate("");
    }
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Add a task" required />
      <input className="todo-form-date" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      <button type="submit">+</button>
    </form>
  );
};

export default TodoForm;
