import { tokenStorage } from "../store/token";
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

        const response = await apiClient.post < AuthResponse > (
            "/auth/register",
            formData,
        );

        await tokenStorage.save(response.data.token);

        return response;
    },

    async login (data: LoginRequest) {
        const response = await apiClient.post < AuthResponse > (
            "/auth/login",
            data,
        );

        await tokenStorage.save(response.data.token);

        return response;
    },
};
