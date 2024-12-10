import React from "react";
import { Todo } from "../models/todo";

interface TodoItemProps extends Todo {
  toggleComplete: () => void;
  removeTodo: () => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ title, completed, toggleComplete, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-2 p-2 border-b">
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={completed}
          onChange={toggleComplete}
          className="mr-2"
        />
        <span className={completed ? "line-through text-gray-500" : ""}>{title}</span>
      </div>
      <button
        onClick={removeTodo}
        className="bg-red-500 text-white px-4 py-2 rounded"
      >
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
