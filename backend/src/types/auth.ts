import { Request } from "express";

export type RegisterParams = {
    fullName: string,
    username: string,
    email: string,
    password: string,
    avatarBuffer: Buffer,
};

export type LoginParams = {
    email?: string;
    username?: string;
    password: string;
}

export interface AuthUser {
    uid: string;
    username: string;
    email: string;
};

export interface AuthRequest extends Request {
    user?: AuthUser;
};
