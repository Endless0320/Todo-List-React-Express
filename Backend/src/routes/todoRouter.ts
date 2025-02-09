import {Router} from "express";
import {authMiddleware} from "../middlewares";
import {TodoController} from "../controllers/"
import {TodoValidator} from "../validators";
import {todoAddValidator} from "../validators/todo";

export const todoRouter = Router();

todoRouter.get(
  "/",
  authMiddleware,
  TodoController.todoListController
);

todoRouter.post(
  "/",
  authMiddleware,
  TodoValidator.todoAddValidator(),
  TodoController.addTodoController
);

todoRouter.put(
  "/:uuid",
  authMiddleware,
  TodoController.editTodoController
);

todoRouter.delete(
  "/:uuid",
  authMiddleware,
  TodoController.deleteTodoController
);
