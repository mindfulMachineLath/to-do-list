const API_URL = "http://localhost:4000/todos";

export const fetchTodos = async () => (await fetch(API_URL)).json();

export const addTodo = async (title: string) =>
  (await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title }),
  })).json();

export const updateTodo = async (id: string, completed: boolean) =>
  (await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ completed }),
  })).json();

export const deleteTodo = async (id: string) =>
  await fetch(`${API_URL}/${id}`, { method: "DELETE" });
