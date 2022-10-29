import React, { useState } from "react";
import { Todo } from "../model";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import TodoList from "./TodoList";
type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo: React.FC<Props> = ({ todo, setTodos, todos }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };
  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };
  return (
    <form
      onSubmit={(e) => handleEdit(e, todo.id)}
      className="flex items-center w-full md:w-[30%]  bg-gray-500 rounded-[5px] mt-4 p-5"
    >
      {edit ? (
        <input
          className="flex-1 outline-none text-4"
          type="text"
          value={editTodo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <p
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            } else {
              setEdit(!edit);
            }
          }}
          className={`flex-1 p-[5px] text-lg focus:outline-none ${
            todo.isDone && "line-through"
          }`}
        >
          {todo.todo}
        </p>
      )}

      <div className="flex gap-[10px]">
        <span
          className="icon md: cha"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            } else {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDelete(todo.id);
          }}
        >
          <AiFillDelete />
        </span>
        <span
          className="icon"
          onClick={() => {
            handleDone(todo.id);
          }}
        >
          <MdDone />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
