import { meController } from "@/controllers/auth/me.controller";
import { registerController, loginController } from "@/controllers/auth/auth.controller";
import { authMiddleware } from "@/middlewares/auth.middleware";
import { Router } from "express";
import { upload } from "@/middlewares/upload";

const router = Router();

router.get("/me", authMiddleware, meController);
router.post("/login", loginController);
router.post("/register", upload.single("avatar"), registerController);

export default router;
