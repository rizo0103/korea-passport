import { Router } from "express";
import { upload } from "../middlewares/upload";
import { uploadAvatar } from "../services/upload/uploadAvatar";

const router = Router();

router.post("/avatar", upload.single("avatar"), async (req, res) => {

    try {
        if (!req.file) {
            return res.status(400).json({ error: "No file provided" });
        }

        const result = await uploadAvatar(req.file.buffer);

        return res.json(result);
    } catch (error) {
        return res.status(500).json({ error: "Upload failed (server error)" });
    }
});

export default router;
