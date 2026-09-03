import {
    createContext,
    PropsWithChildren,
    useContext,
    useEffect,
    useState,
} from "react";

import { router } from "expo-router";

import {
    LoginRequest,
    RegisterRequest,
    User,
} from "../types/auth";

import { authApi } from "../api/auth";
import { tokenStorage } from "../store/token";

interface AuthContextType {
    user: User | null;
    loading: boolean;
    isAuthenticated: boolean;

    login(data: LoginRequest): Promise<void>;
    register(data: RegisterRequest): Promise<void>;
    logout(): Promise<void>;
}

const AuthContext =
    createContext<AuthContextType | null>(null);

export function AuthProvider({
    children,
}: PropsWithChildren) {
    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    const isAuthenticated = !!user;

    const loadCurrentUser = async () => {
        try {
            const me = await authApi.me();

            setUser(me.data);
        } catch (error) {
            console.error("Failed to load current user:", error);

            setUser(null);
        }
    };

    const login: AuthContextType["login"] = async (
        data
    ) => {
        const response = await authApi.login(data);

        if (!response.data.token) {
            throw new Error(
                "No token returned from login."
            );
        }

        await tokenStorage.save(
            response.data.token
        );

        await loadCurrentUser();
    };

    const register: AuthContextType["register"] =
        async (data) => {
            const response =
                await authApi.register(data);

            if (!response.data.token) {
                throw new Error(
                    "No token returned from register."
                );
            }

            await tokenStorage.save(
                response.data.token
            );

            await loadCurrentUser();
        };

    const logout: AuthContextType["logout"] =
        async () => {
            try {
                await tokenStorage.clear();
            } finally {
                setUser(null);
            }

            router.replace("/welcome");
        };

    useEffect(() => {
        const init = async () => {
            try {
                const token =
                    await tokenStorage.get();

                if (token) {
                    await loadCurrentUser();
                } else {
                    setUser(null);
                    router.replace("/welcome");
                }
            } catch (error) {
                console.error(
                    "Auth initialization error:",
                    error
                );

                setUser(null);

                try {
                    await tokenStorage.clear();
                } catch (storageError) {
                    console.error(
                        "Failed to clear token:",
                        storageError
                    );
                }

                router.replace("/welcome");
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
        throw new Error(
            "useAuth must be used inside AuthProvider"
        );
    }

    return context;
};