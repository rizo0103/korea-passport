import express from "express";
import cors from "cors";
import cloudinary from "./config/cloudinary";
import uploadRoutes from "./routes/upload.routes";
import authRoutes from "./routes/auth.routes";
import { ENV } from "./config/env";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);
app.use("/auth", authRoutes);

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

const PORT = 3000;
const HOST = ENV.host.address;

app.listen(PORT, HOST, () => {
    console.log(`Server is running on http://${HOST}:${PORT}`);
});
