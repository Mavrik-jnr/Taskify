import InputField from "./components/InputField";
import React, { useState } from "react";
import { Todo } from "./model";
import TodoList from "./components/TodoList";
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo) {
      setTodos([...todos, { id: Date.now(), todo: todo, isDone: false }]);
      setTodo("");
    }
  };

  return (
    <div className="font-body bg-blue-200 h-screen pt-9 flex flex-col items-center">
      <h1 className="text-center text-3xl md:text-6xl text-orange-600 uppercase z-30 mb-9 m">
        Taskify
      </h1>
      <InputField todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default App;
