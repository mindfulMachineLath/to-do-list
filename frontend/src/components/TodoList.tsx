import React from "react";
import { Todo } from "../models/todo";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  toggleComplete: (id: string, completed: boolean) => void;
  removeTodo: (id: string) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <div>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          {...todo}
          toggleComplete={() => toggleComplete(todo.id, !todo.completed)}
          removeTodo={() => removeTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoList;
