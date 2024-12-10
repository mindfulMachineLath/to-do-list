import React, { useState, useEffect } from "react";
import AddTodo from "../components/AddTodo";
import TodoList from "../components/TodoList";
import { Todo } from "../models/todo";
import { fetchTodos, updateTodo, deleteTodo } from "../api/todos";

const Home: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then(setTodos);
  }, []);

  const handleAddTodo = (todo: Todo) => {
    setTodos([...todos, todo]);
  };

  const toggleComplete = async (id: string, completed: boolean) => {
    await updateTodo(id, completed);
    setTodos((prev) =>
      prev.map((todo) => (todo.id === id ? { ...todo, completed } : todo))
    );
  };

  const removeTodo = async (id: string) => {
    await deleteTodo(id);
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">To-Do List</h1>
      <AddTodo onAdd={handleAddTodo} />
      <TodoList
        todos={todos}
        toggleComplete={toggleComplete}
        removeTodo={removeTodo}
      />
    </div>
  );
};

export default Home;
