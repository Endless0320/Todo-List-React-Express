import { useContext, useEffect } from "react";
import { TodoContext } from "../context/TodoContext";
import { Button, List, ListItem, Checkbox, TextField } from "@mui/material";

export const TodoList = () => {
  const { todos, fetchTodos, updateTodo, deleteTodo } = useContext(TodoContext)!;

  useEffect(() => {
    fetchTodos();
  }, []);

  return (
    <List>
      {todos.map((todo) => (
        <ListItem key={todo.uuid}>
          <Checkbox checked={todo.completed} onChange={() => updateTodo(todo.uuid, { completed: !todo.completed })} />
          <TextField defaultValue={todo.title} onBlur={(e) => updateTodo(todo.uuid, { title: e.target.value })} />
          <Button color="error" onClick={() => deleteTodo(todo.uuid)}>Delete</Button>
        </ListItem>
      ))}
    </List>
  );
};
