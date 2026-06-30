import { NextFunction, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthRequest } from "@/types";
import { errorResponse, HttpStatus } from "@/utils/http";
import { ENV } from "@/config/env";

export const authMiddleware = (req: AuthRequest, res : Response, next : NextFunction) => {
    try {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            return errorResponse({
                res,
                message: "No token provided.",
                status: HttpStatus.UNAUTHORIZED,
                code: "NO_TOKEN",
            });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return errorResponse({
                res,
                message: "Invalid token format.",
                status: HttpStatus.BAD_REQUEST,
                code: "INVALID_TOKEN_FORMAT",
            });
        }

        const decoded = jwt.verify(token, ENV.auth.jwtSecret!) as any;

        req.user = {
            uid: decoded.uid,
            username: decoded.username,
            email: decoded.email,
        };

        next();
    } catch (error) {
        return errorResponse({
            res,
            message: "Unauthorized",
            status: HttpStatus.UNAUTHORIZED,
            code: "UNAUTHORIZED",
        })
    }
};
