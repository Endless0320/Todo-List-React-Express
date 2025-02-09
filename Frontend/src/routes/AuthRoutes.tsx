import { Route } from "react-router-dom";
import { lazy } from "react";

const LoginPage = lazy(() => import("../pages/auth/LoginPage"));
const RegisterPage = lazy(() => import("../pages/auth/RegisterPage"));

export const AuthRoutes = () => {
  return (
    <>
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </>
  );
};
