import { body } from "express-validator";

export const todoAddValidator = () => {
  return [
    body("title").notEmpty().withMessage("Title is required."),
    body("description").notEmpty().withMessage("Note is required."),
    body("due_date").notEmpty().withMessage("Due Date is required."),
  ];
};
