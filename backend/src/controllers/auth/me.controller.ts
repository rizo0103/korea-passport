import { Request, Response } from "express";
import { getUserById } from "@/services/user/getUserById";
import { successResponse, errorResponse, HttpStatus } from "@/utils/http";

export const meController = async (req: Request, res: Response) => {
    try {
        const uid = req.user.uid;

        const user = await getUserById(uid);

        if (!user) {
            return errorResponse({
                res,
                message: "User not found.",
                status: HttpStatus.NOT_FOUND,
                code: "USER_NOT_FOUND",
            });
        }

        return successResponse({
            res,
            message: "User profile fetched successfully.",
            data: user,
            status: HttpStatus.OK,
        });

    } catch (error) {
        return errorResponse({
            res,
            message: "Internal server error.",
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            code: "SERVER_ERROR",
        });
    }
};