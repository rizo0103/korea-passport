import { Request, Response } from "express";
import { register } from "@/services/auth/register";
import { successResponse, errorResponse } from "@/utils/http/response";
import { HttpStatus } from "@/utils/http/status";

export const registerController = async (req: Request, res: Response) => {
    try {
        const file = req.file;

        if (!file) {
            return errorResponse({
                res,
                message: "Avatar is required",
                status: HttpStatus.BAD_REQUEST,
                code: "AVATAR_REQUIRED",
            });
        }

        const { fullName, username, email, password } = req.body;

        if (!fullName || !username || !email || !password) {
            return errorResponse({
                res,
                message: "Missing required fields.",
                status: HttpStatus.BAD_REQUEST,
                code: "INVALID_BODY",
            });
        }

        const user = await register({ 
            fullName, 
            username, 
            email, 
            password, 
            avatarBuffer: 
            file.buffer 
        });

        return successResponse({ 
            res, 
            message: "Successfully created user: " + username + ".", 
            data: user, 
            status: HttpStatus.CREATED 
        });

    } catch (error) {
        return errorResponse({
            res,
            message: "Internal server error",
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            code: "SERVER_ERROR",
        });
    }
};
