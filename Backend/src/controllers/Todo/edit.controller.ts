import {todoService} from "../../services";
import {errorHandlerWrapper} from "../../utils";
import httpStatus from "http-status";

const editTodoHandler = async (req, res) => {
  const {description, due_date, title, completed} = req.body;
  const {uuid: userId} = req.user;
  const {uuid: todoId} = req.params;
  const todo = todoService.editTodo({completed, description, due_date, title, user_id: userId, uuid: todoId});
  res.json({todo}).status(httpStatus.CREATED);
};

export const editTodoController = errorHandlerWrapper(editTodoHandler);
