import { createContext, useState, useEffect, ReactNode } from "react";
import { toast } from "react-toastify";
import AuthContextPropsTypes from "../types/auth/AuthContextProps.types";
import UserDataTypes from "../types/auth/UserData.types";
import api from "../services/Api";

export const AuthContext = createContext<AuthContextPropsTypes | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<UserDataTypes | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) setUser(JSON.parse(storedUser));
        setLoading(false);
    }, []);

    const login = async (email: string, password: string) => {
        try {
            const { data } = await api.post("/auth/login", { email, password });
            setUser(data);
            localStorage.setItem("user", JSON.stringify(data));
            toast.success("Logged in successfully!");
        } catch (error) {
            toast.error("Login failed!");
        }
    };

    const register = async (username: string, email: string, password: string) => {
        try {
            await api.post("/auth/register", { username, email, password });
            toast.success("Account created successfully!");
        } catch (error) {
            toast.error("Registration failed!");
        }
    };

    const logout = () => {
        setUser(null);
        // localStorage.removeItem("user");
        toast.info("Logged out!");
    };

    return <AuthContext.Provider value={{ user, login, register, logout, loading }}>{children}</AuthContext.Provider>;
};