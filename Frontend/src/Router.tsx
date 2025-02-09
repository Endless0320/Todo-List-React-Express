import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { AuthProvider } from "./context/AuthContext";
import { TodoProvider } from "./context/TodoContext";
import { ThemeProviderComponent } from "./context/ThemeContext";
import { AppLayout } from "./layout/AppLayout";
import { ToastContainer } from "react-toastify";
import { CircularProgress, Box } from "@mui/material";
import { AuthRoutes } from "./routes/AuthRoutes";
import { TodoRoutes } from "./routes/TodoRoutes";

// Loading Spinner
const LoadingSpinner = () => (
  <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
    <CircularProgress />
  </Box>
);

export const AppRouter = () => {
  return (
    <ThemeProviderComponent>
      <AuthProvider>
        <TodoProvider>
          <Router>
            <Suspense fallback={<LoadingSpinner />}>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  {AuthRoutes()}
                  {TodoRoutes()}
                </Route>
              </Routes>
            </Suspense>
            <ToastContainer position="top-right" autoClose={3000} />
          </Router>
        </TodoProvider>
      </AuthProvider>
    </ThemeProviderComponent>
  );
};
