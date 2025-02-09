import { useState, useEffect, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { TodoContext } from "../../context/TodoContext";
import { InputField } from "../../components/common/InputField";
import { ButtonComponent } from "../../components/common/ButtonComponent";
import { Container, Typography } from "@mui/material";
import { toast } from "react-toastify";

export const TodoFormPage = () => {
  const { todos, addTodo, updateTodo } = useContext(TodoContext)!;
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { title: "", description: "", due_date: "" },
    validationSchema: Yup.object({
      title: Yup.string().min(3, "Title must be at least 3 characters").required("Title is required"),
      description: Yup.string().min(5, "Description must be at least 5 characters").required("Description is required"),
      due_date: Yup.date().required("Due Date is required"),
    }),
    onSubmit: async (values) => {
      if (id) {
        await updateTodo(id, { ...values });
        toast.success("Todo updated!");
      } else {
        await addTodo({ ...values, completed: false, uuid: crypto.randomUUID() });
        toast.success("Todo added!");
      }
      navigate("/");
    },
  });

  useEffect(() => {
    if (id) {
      const existingTodo = todos.find((t) => t.uuid === id);
      if (existingTodo) {
        formik.setValues({
          title: existingTodo.title,
          description: existingTodo.description,
          due_date: existingTodo.due_date,
        });
      }
    }
  }, [id, todos]);

  return (
    <Container maxWidth="sm">
      <Typography variant="h4">{id ? "Edit Todo" : "Add New Todo"}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label="Title"
          value={formik.values.title}
          onChange={formik.handleChange}
          name="title"
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title ? formik.errors.title : ""}
        />
        <InputField
          label="Description"
          value={formik.values.description}
          onChange={formik.handleChange}
          name="description"
          error={formik.touched.description && Boolean(formik.errors.description)}
          helperText={formik.touched.description ? formik.errors.description : ""}
        />
        <InputField
          label="Due Date"
          type="date"
          value={formik.values.due_date}
          onChange={formik.handleChange}
          name="due_date"
          error={formik.touched.due_date && Boolean(formik.errors.due_date)}
          helperText={formik.touched.due_date ? formik.errors.due_date : ""}
        />
        <ButtonComponent label={id ? "Save Changes" : "Add Todo"} type="submit" />
      </form>
    </Container>
  );
};

export default TodoFormPage;
