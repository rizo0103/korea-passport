import { uploadAvatar } from "@/services/upload/uploadAvatar";
import { Request, Response } from "express";

export const uploadAvatarController = async (req : Request, res : Response) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "Avatar is required" });
        }

        const avatar = await uploadAvatar(req.file.buffer);

        return res.status(200).json({ message: "Successfully uploaded avatar", avatar });
    } catch (error) {
        return res.status(500).json({ message: "Failed to upload avatar (server error)" });
    }
};
