import { Request, Response } from "express";
import { Todo } from "../models/todo";
import { v4 as uuidv4 } from "uuid";

let todos: Todo[] = [];

export const getTodos = (req: Request, res: Response) => {
    res.json(todos);
};

export const addTodo = (req: Request, res: Response) => {
  const newTodo: Todo = { id: uuidv4(), title: req.body.title, completed: false };
  todos.push(newTodo);
  res.status(201).json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  const { completed } = req.body;
  todos = todos.map((todo) => (todo.id === id ? { ...todo, completed } : todo));
  res.json(todos.find((todo) => todo.id === id));
};

export const deleteTodo = (req: Request, res: Response) => {
  const { id } = req.params;
  todos = todos.filter((todo) => todo.id !== id);
  res.status(204).send();
};
