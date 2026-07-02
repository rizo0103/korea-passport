export interface User {
    uid: string;

    fullName: string;
    username: string;
    email: string;
    password: string;

    avatar?: {
        url: string;
        publicId: string;
    } | null;

    stats?: {
        xp: number;
        level: number;
    };

    role: "guest" | "user" | "student" | "admin" | "owner";

    createdAt?: number | Date;
}