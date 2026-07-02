export interface JwtPayload {
    uid: string;
    role: "user" | "student" | "admin" | "owner";
};