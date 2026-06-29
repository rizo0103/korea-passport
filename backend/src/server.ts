import express from "express";
import cors from "cors";
import cloudinary from "./config/cloudinary";
import uploadRoutes from "./routes/upload.routes";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/upload", uploadRoutes);

app.get("/health", (req, res) => {
    res.json({ status: "ok" });
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
