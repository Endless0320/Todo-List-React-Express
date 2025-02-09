import {createContext, useState, ReactNode} from "react";
import TodoDataTypes from "../types/todo/TodoData.types";
import TodoContextPropsTypes from "../types/todo/TodoContextProps.types";
import api from "../services/Api";

export const TodoContext = createContext<TodoContextPropsTypes | undefined>(undefined);

export const TodoProvider = ({children}: { children: ReactNode }) => {
  const [todos, setTodos] = useState<TodoDataTypes[]>([]);

  const fetchTodos = async () => {
    console.log("Fetching todos...");
    const { data } = await api.get("/todo");
    setTodos(data);
  };

  const addTodo = async (todo: Omit<TodoDataTypes, "id">) => {
    const {data} = await api.post("/todo", todo);
    setTodos((prev) => [...prev, data]);
  };

  const updateTodo = async (id: string, updatedTodo: Partial<TodoDataTypes>) => {
    await api.put(`/todo/${id}`, updatedTodo);
    setTodos((prev) => prev.map((t) => (t.uuid === id ? {...t, ...updatedTodo} : t)));
  };

  const deleteTodo = async (id: string) => {
    await api.delete(`/todo/${id}`);
    setTodos((prev) => prev.filter((t) => t.uuid !== id));
  };

  return (
    <TodoContext.Provider value={{todos, fetchTodos, addTodo, updateTodo, deleteTodo}}>
      {children}
    </TodoContext.Provider>
  );
};
