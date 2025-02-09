import {useCallback, useContext, useEffect} from "react";
import { TodoContext } from "../../context/TodoContext";
import { AuthContext } from "../../context/AuthContext";
import { ThemeContext } from "../../context/ThemeContext";
import { TodoItem } from "../../components/todo/TodoItem";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { Typography, List, Container, Switch } from "@mui/material";
import { useNavigate } from "react-router-dom";

const TodoPage = () => {
  const { todos, fetchTodos, updateTodo, deleteTodo } = useContext(TodoContext)!;
  const { loading } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const memoizedFetchTodos = useCallback(fetchTodos, []);

  useEffect(() => {
    if (!loading) {
      memoizedFetchTodos();
    }
  }, [loading, memoizedFetchTodos]);

  return (
    <Container>
      <Typography variant="h4">Todo List</Typography>

      <ButtonComponent label="+ Add Todo" onClick={() => navigate("/todo-form")} />

      <List>
        {todos.map((todo) => (
          <TodoItem key={todo.uuid} id={todo.uuid} title={todo.title} description={todo.description} completed={todo.completed} onUpdate={updateTodo} onDelete={deleteTodo} onEdit={() => navigate(`/todo-form/${todo.uuid}`)} />
        ))}
      </List>
    </Container>
  );
};

export default TodoPage;