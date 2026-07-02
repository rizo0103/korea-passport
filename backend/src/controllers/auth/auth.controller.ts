import { Request, Response } from "express";
import { login, register } from "@/services/auth/auth.service";
import { successResponse, errorResponse, HttpStatus } from "@/utils/http";

export const registerController = async (req: Request, res: Response) => {
    try {
        console.log("REGISTER CONTROLLE");
        const file = req.file?.buffer;

        const { fullName, username, email, password } = req.body;

        const result = await register({
            fullName,
            username,
            email,
            password,
            avatarBuffer: file,
        });

        return successResponse({
            res,
            message: "User created successfully",
            data: result,
            status: HttpStatus.CREATED,
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

export const loginController = async (req: Request, res: Response) => {
    try {
        const { login: loginValue, password } = req.body;

        if (!loginValue || !password) {
            return errorResponse({
                res,
                message: "Login and password are required",
                status: HttpStatus.BAD_REQUEST,
                code: "MISSING_FIELDS",
            });
        }

        const result = await login(loginValue, password);

        return successResponse({
            res,
            message: "Login successful",
            data: result,
            status: HttpStatus.OK,
        });

    } catch (error: any) {
        return errorResponse({
            res,
            message: error.message || "Invalid credentials",
            status: HttpStatus.UNAUTHORIZED,
            code: "INVALID_CREDENTIALS",
        });
    }
};
