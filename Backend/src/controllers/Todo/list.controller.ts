import { todoService } from "../../services";
import { errorHandlerWrapper } from "../../utils";

const todoListHandler = async (req, res) => {
  const {uuid: userId} = req.user;

  const result = await todoService.listTodo({userId});
  return res.json(result);
};

export const todoListController = errorHandlerWrapper(todoListHandler);
