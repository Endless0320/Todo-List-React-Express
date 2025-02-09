import {TodoEntity} from "../entities";
import {AppDataSouce} from "../db";

export const createTodo = async (data) => {
  const { title, description, due_date, user_id } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const todo = todoRepository.create({ user_id, title, description, due_date });
  await todoRepository.save(todo);
  return todo;
};

export const editTodo = async (data) => {
  const { title, description, due_date, user_id, uuid, completed } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const existingTodo = await todoRepository.findOne({
    where: { uuid, user_id },
  });
  if (!existingTodo) return null;
  await todoRepository.update({ uuid, user_id }, {
    title: title || existingTodo.title,
    description: description || existingTodo.description,
    completed: completed || existingTodo.completed,
    due_date: due_date || existingTodo.due_date
  });
  return await todoRepository.findOne({ where: { uuid } });
};

export const deleteTodo = async (data) => {
  const { user_id, uuid } = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  const existingTodo = await todoRepository.findOne({
    where: { uuid, user_id },
  });
  if (!existingTodo) return null;
  await todoRepository.delete({ uuid, user_id });1
  return await todoRepository.findOne({ where: { uuid } });
}

export const listTodo = async (data) => {
  const {userId} = data;
  const todoRepository = AppDataSouce.getRepository(TodoEntity);
  return await todoRepository.find({where: {user_id: userId}, order: {due_date: "desc", createdAt: "desc"}});
}