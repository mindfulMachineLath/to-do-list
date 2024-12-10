import React, { useState } from "react";
import { addTodo } from "../api/todos";
import { Todo } from "../models/todo";

const AddTodo: React.FC<{ onAdd: (todo: Todo) => void }> = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Title cannot be empty.");
      return;
    }

    try {
      const newTodo = await addTodo(title);
      onAdd(newTodo);
      setTitle("");
      setError(null);
    } catch (err) {
      console.log(err)
      setError("An error occurred while adding the task.");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="flex-1 border rounded px-2 py-1"
          placeholder="Add a new task"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add
        </button>
      </form>
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
};

export default AddTodo;
