import { AuthResponse, LoginRequest, RegisterRequest } from "../types/auth";
import { apiClient } from "./client";

export const authApi = {
    async register (data: RegisterRequest) {
        const formData = new FormData();

        formData.append("fullName", data.fullName);
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("password", data.password);
        
        formData.append("avatar", {
            uri: data.avatar.uri,
            name: data.avatar.name,
            type: data.avatar.type,
        } as any);

        return apiClient.post < AuthResponse > (
            "/auth/register",
            formData,
        );
    },

    async login (data: LoginRequest) {
        return apiClient.post < AuthResponse > (
            "/auth/login",
            data,
        );
    },
};
