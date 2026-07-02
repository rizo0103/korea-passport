import { NextFunction, Request, Response } from "express";
import { errorResponse, HttpStatus } from "@/utils/http";
import { jwtService } from "@/services/jwt/jwt.service";

export const authMiddleware = (req: Request, res : Response, next : NextFunction) => {
    try {
        const authorization = req.headers.authorization;

        if (!authorization) {
            return errorResponse({
                res,
                message: "Unauthorized.",
                status: HttpStatus.UNAUTHORIZED,
                code: "NO_TOKEN",
            });
        }

        if (!authorization.startsWith(`Bearer `)) {
            return errorResponse({
                res,
                message: "Bad token.",
                status: HttpStatus.UNAUTHORIZED,
                code: "INVALID_AUTH_HEADER",
            });
        }
        
        const [, token] = authorization.split(" ");

        if (!token) {
            return errorResponse({
                res,
                message: "Invalid token.",
                status: HttpStatus.UNAUTHORIZED,
                code: "INVALID_TOKEN",
            })
        }

        const payload = jwtService.verifyToken(token);

        req.user = payload;

        next();
    } catch (error) {
        return errorResponse({
            res,
            message: "Unauthorized.",
            status: HttpStatus.UNAUTHORIZED,
            code: "INVALID_TOKEN",
        })
    }
};
