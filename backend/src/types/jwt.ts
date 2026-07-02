export interface JwtPayload {
    uid: string;
    role: "guest" | "user" | "student" | "admin" | "owner";
};