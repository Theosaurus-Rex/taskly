import React, { useState } from "react";
import "./App.css";

import { Todo } from "./model";
import InputField from "./components/InputField";

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
    }
    setTodo("");
  };

  console.log(todo);
  return (
    <div className="App">
      <h1 className="heading">Taskly</h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      {todos.map((t) => (
        <li>{t.todo}</li>
      ))}
    </div>
  );
};

export default App;
