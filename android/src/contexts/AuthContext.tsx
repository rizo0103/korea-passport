import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";

import { LoginRequest, RegisterRequest, User } from "../types/auth";
import { authApi } from "../api/auth";
import { tokenStorage } from "../store/token";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;

    login(data: LoginRequest): Promise < void >;
    register(data: RegisterRequest): Promise < void >;
    logout(): Promise < void >;
}

const AuthContext = createContext < AuthContextType | null > (null);

export function AuthProvider({ children }: PropsWithChildren) {
    const [user, setUser] = useState < User | null > (null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user;

    const loadCurrentUser = async () => {
        try {
            const me = await authApi.me();
            setUser(me.data);
        } catch (e) {
            setUser(null);
            await tokenStorage.remove();
            console.error(e);
        }
    };
    const login : AuthContextType["login"] = async (data) => {
        const loginResponse = await authApi.login(data);

        if (!loginResponse.data.token) {
            throw new Error("No token returned from login.");
        }

        await tokenStorage.save(loginResponse.data.token);
        await loadCurrentUser();
    };

    const register : AuthContextType["register"] = async (data) => {
        const registerResponse = await authApi.register(data);

        if (!registerResponse.data.token) {
            throw new Error("No token returned from register.");
        }

        await tokenStorage.save(registerResponse.data.token);
        await loadCurrentUser();
    };

    const logout : AuthContextType["logout"] = async () => {
        await tokenStorage.clear();
        setUser(null);
    };

    useEffect(() => {
        const init = async () => {
            try {
                const token = await tokenStorage.get();

                if (token) {
                    await loadCurrentUser();
                }

            } catch (error) {
                console.error(error);
                await tokenStorage.clear();
            } finally {
                setLoading(false);
            }
        };

        init();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                user,
                loading,
                isAuthenticated,
                
                login,
                register,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export const useAuth = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error("useAuth must be used inside AuthProvider");
    }

    return context;
};
