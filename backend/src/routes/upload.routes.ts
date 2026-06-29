import { Router } from "express";
import { upload } from "../middlewares/upload";
import { uploadAvatar } from "../services/upload/uploadAvatar";
import { uploadAvatarController } from "@/controllers/upload/upload.controller";

const router = Router();

router.post("/avatar", upload.single("avatar"), uploadAvatarController);

export default router;
