import { ErrorResponseProps, SuccessResponseProps } from "@/types";
import { HttpStatus } from "./status";

export const successResponse = < T > ({ res, message, data, status = HttpStatus.OK, meta } : SuccessResponseProps < T >) => 
    res.status(status).json({ success: true, message, data, ...(meta && { meta }) });

export const errorResponse = ({ res, message, status, code } : ErrorResponseProps) =>
    res.status(status).json({ success: false, message, code, data: null });