import { Request } from "express";

export type RegisterParams = {
    fullName: string,
    username: string,
    email: string,
    password: string,
    avatarBuffer?: Buffer,
};

export type LoginParams = {
    login: string;
    password: string;
}

export interface AuthUser {
    uid: string;
    username: string;
    email: string;
};
