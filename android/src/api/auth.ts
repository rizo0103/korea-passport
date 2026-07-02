import { AuthResponse, LoginRequest, RegisterRequest, User } from "../types/auth";
import { apiClient } from "./client";

export const authApi = {
    async register (data: RegisterRequest) {
        const formData = new FormData();

        formData.append("fullName", data.fullName);
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("password", data.password);
        
        if (data.avatar) {
            formData.append("avatar", {
                uri: data.avatar.uri,
                name: data.avatar.name,
                type: data.avatar.type,
            } as any);
        }

        return await apiClient.post < AuthResponse > (
            "/auth/register",
            formData,
        );
    },

    async login (data: LoginRequest) {
        return await apiClient.post < AuthResponse > (
            "/auth/login",
            data,
        );
    },

    async me () {
        const response = await apiClient.get < User > ("/auth/me");

        return response;
    }
};
