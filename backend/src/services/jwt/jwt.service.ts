import jwt from "jsonwebtoken";
import { ENV } from "@/config/env";
import { JwtPayload } from "@/types/jwt";

export const jwtService = {
    generateToken(payload : JwtPayload) {
        return jwt.sign(payload, ENV.auth.jwtSecret, {
            expiresIn: ENV.auth.jwtExpiresIn,
        });
    },

    verifyToken(token: string) {
        return jwt.verify(token, ENV.auth.jwtSecret) as JwtPayload;
    }
};
