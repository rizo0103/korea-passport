import { ENV } from "@/config/env";
import jwt from "jsonwebtoken";

export const generateToken = (payload : object) => 
    jwt.sign(payload, ENV.auth.jwtSecret!, {
        expiresIn: '1d',
    });