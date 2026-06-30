import React, { createContext, useContext, useEffect, useState } from "react";
import { LoginRequest, RegisterRequest, User } from "../types/auth";
import { tokenStorage } from "../store/token";
import { authApi } from "../api/auth";

type AuthContextType = {
    user: User | null;
    token: string | null;
    loading: boolean;

    login: (data: LoginRequest) => Promise < void >;
    register: (data: RegisterRequest) => Promise < void >;
    logout: () => Promise < void >;
};

const AuthContext = createContext < AuthContextType | null > (null);

export const AuthProvider = ({ children } : { children : React.ReactNode}) => {
    const [ user, setUser ] = useState < User | null > (null);
    const [ token, setToken ] = useState < string | null > (null);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        const loadSession = async () => {
            const savedToken = await tokenStorage.get();

            if (savedToken) {
                setToken(savedToken);
            }

            setLoading(false);
        };

        loadSession();
    }, []);

    const login  = async (data : LoginRequest) => {
        const res = await authApi.login(data);

        await tokenStorage.save(res.data.token);

        setToken(res.data.token);
        setUser(res.data.user);
    };

    const register = async (data : RegisterRequest) => {
        const res = await authApi.register(data);

        await tokenStorage.save(res.data.token);

        setToken(res.data.token);
        setUser(res.data.user);
    };

    const logout = async () => {
        await tokenStorage.remove();

        setToken(null);
        setUser(null);
    }

    return (
        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
} 
