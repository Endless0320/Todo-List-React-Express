import {Navigate, Route} from "react-router-dom";
import { lazy, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const TodoPage = lazy(() => import("../pages/todo/TodoPage"));
const TodoFormPage = lazy(() => import("../pages/todo/TodoFormPage"));

const ProtectedRoute = ({ children }: { children: JSX.Element }) => {
  const { user, loading } = useContext(AuthContext)!;
  if (loading) {
    return <div>Loading...</div>
  }
  return user ? children : <Navigate to="/login" />;
};

export const TodoRoutes = () => {
  return (
    <>
      <Route index element={<ProtectedRoute><TodoPage /></ProtectedRoute>} />
      <Route path="todo-form" element={<ProtectedRoute><TodoFormPage /></ProtectedRoute>} />
      <Route path="todo-form/:id" element={<ProtectedRoute><TodoFormPage /></ProtectedRoute>} />
    </>
  );
};
