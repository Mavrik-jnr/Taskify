import React from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <div className="w-10/12 grid md:grid-cols-[repeat(auto-fit,minmax(200px,1fr))]   md:auto-rows-[200px] auto-rows-[70px] pt-8 gap-4">
      {todos.map((todo) => {
        return (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
