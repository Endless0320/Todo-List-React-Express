import {todoService} from "../../services";
import {errorHandlerWrapper} from "../../utils";
import {encryptPassword} from "../../utils";
import httpStatus from "http-status";

const deleteTodoHandler = async (req, res) => {
  const {uuid} = req.params;
  const {uuid: userId} = req.user;
  const todo = await todoService.deleteTodo({uuid, user_id: userId});

  res.status(httpStatus.OK).json({message: "Todo deleted successfully"});
};

export const deleteTodoController = errorHandlerWrapper(deleteTodoHandler);
