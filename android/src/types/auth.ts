export interface RegisterRequest {
    fullName: string;
    username: string;
    email: string;
    password: string;

    avatar: {
        uri: string;
        name: string;
    } | null;
}

export interface LoginRequest {
    login: string;
    password: string;
}

export interface AuthResponse {
    token: string;
    user: User;
}

export interface User {
    uid: string;
    fullName: string;
    username: string;
    email: string;

    avatar: {
        url: string;
        publicId: string;
    };

    stats: {
        xp: number;
        level: number;
    };

    createdAt: string;
}