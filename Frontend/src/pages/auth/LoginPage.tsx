import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext";
import {AuthForm} from "../../components/auth/AuthForm";

const LoginPage = () => {
  const { login } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleLogin = async (email: string, password: string) => {
    await login(email, password);
    navigate("/");
  };

  return <AuthForm title="Login" onSubmit={handleLogin} buttonLabel="Login" />;
};

export default LoginPage;