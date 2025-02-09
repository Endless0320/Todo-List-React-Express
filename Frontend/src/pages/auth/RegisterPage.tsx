import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { AuthForm } from "../../components/auth/AuthForm";

export const RegisterPage = () => {
  const { register } = useContext(AuthContext)!;
  const navigate = useNavigate();

  const handleRegister = async (email: string, password: string, username?: string) => {
    if (username) {
      await register(username, email, password);
      navigate("/login");
    }
  };

  return <AuthForm title="Register" onSubmit={handleRegister} buttonLabel="Register" isRegister />;
};

export default RegisterPage;