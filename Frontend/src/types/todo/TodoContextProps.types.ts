import TodoDataTypes from "./TodoData.types";

export default interface TodoContextPropsTypes {
  todos: TodoDataTypes[];
  fetchTodos: () => Promise<void>;
  addTodo: (todo: Omit<TodoDataTypes, "id">) => Promise<void>;
  updateTodo: (id: string, updatedTodo: Partial<TodoDataTypes>) => Promise<void>;
  deleteTodo: (id: string) => Promise<void>;
}