import {todoService} from "../../services";
import {errorHandlerWrapper} from "../../utils";
import {encryptPassword} from "../../utils";
import httpStatus from "http-status";

const addTodoHandler = async (req, res) => {
  const {description, due_date, title} = req.body;
  const {uuid} = req.user;
  const todo = todoService.createTodo({description, due_date, title, user_id: uuid});
  res.json(todo).status(httpStatus.CREATED);
};

export const addTodoController = errorHandlerWrapper(addTodoHandler);
