import dotenv from "dotenv";
import { SignOptions } from "jsonwebtoken";

dotenv.config();

export const ENV = {
    cloudinary: {
        cloudName: process.env.CLOUDINARY_CLOUD_NAME!,
        apiKey: process.env.CLOUDINARY_API_KEY!,
        apiSecret: process.env.CLOUDINARY_API_SECRET!,
    },
    auth: {
        jwtSecret: process.env.JWT_SECRET!,
        jwtExpiresIn: (process.env.JWT_EXPIRES_IN as SignOptions["expiresIn"]) ?? "7d",
    },
    host: {
        address: process.env.HOST_ADDRESS!,
    }
};

const required = [
    "JWT_SECRET",
    "CLOUDINARY_CLOUD_NAME",
    "CLOUDINARY_API_KEY",
    "CLOUDINARY_API_SECRET",
    "HOST_ADDRESS"
];

for (const key of required) {
    if (!process.env[key]) {
        console.error(`Missing environment variable ${key}`);
    }
}
