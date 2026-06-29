import { Response } from "express";

export type SuccessResponseProps < T > = {
    res: Response;
    message: string;
    data: T;
    status?: number;
    meta?: Record < string, unknown >;
};

export type ErrorResponseProps = {
    res: Response;
    message: string;
    status: number;
    code?: string;
};
