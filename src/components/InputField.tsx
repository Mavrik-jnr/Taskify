import React from "react";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

function InputField({ todo, setTodo, handleAdd }: Props) {
  return (
    <form
      className="flex w-11/12 items-center relative"
      onSubmit={(e) => handleAdd(e)}
    >
      <input
        className="py-5 px-8 rounded-full text-lg transition duration-200 shadow-md focus:shadow-xl outline-none w-full"
        type="input"
        placeholder="Enter a task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        className="transform active:scale-90 hover:bg-blue-100 absolute  px-4 py-3 m-2 rounded-full o right-2 text-lg bg-blue-200 shadow-md"
        type="submit"
      >
        Go
      </button>
    </form>
  );
}

export default InputField;
