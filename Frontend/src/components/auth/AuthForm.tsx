import { useFormik } from "formik";
import * as Yup from "yup";
import { Container, Typography } from "@mui/material";
import AuthFormPropsTypes from "../../types/auth/AuthForm.types";
import {InputField} from "../common/InputField";
import {ButtonComponent} from "../common/ButtonComponent";

export const AuthForm = ({ title, onSubmit, buttonLabel, isRegister = false }: AuthFormPropsTypes) => {
  const formik = useFormik({
    initialValues: { username: "", email: "", password: "" },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email format").required("Email is required"),
      username: isRegister ? Yup.string().min(3, "Username must be at least 3 characters").required("Username is required") : Yup.string(),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: async (values) => {
      if (isRegister) {
        await onSubmit(values.email, values.password, values.username);
      } else {
        await onSubmit(values.email, values.password); // Login uses email only
      }
    },
  });

  return (
    <Container maxWidth="xs">
      <Typography variant="h4">{title}</Typography>
      <form onSubmit={formik.handleSubmit}>
        <InputField
          label="Email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          name="email"
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email ? formik.errors.email : ""}
        />

        {isRegister && ( // Only show username field on register
          <InputField
            label="Username"
            value={formik.values.username}
            onChange={formik.handleChange}
            name="username"
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username ? formik.errors.username : ""}
          />
        )}

        <InputField
          label="Password"
          value={formik.values.password}
          type="password"
          onChange={formik.handleChange}
          name="password"
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password ? formik.errors.password : ""}
        />

        <ButtonComponent label={buttonLabel} type="submit" />
      </form>
    </Container>
  );
};
