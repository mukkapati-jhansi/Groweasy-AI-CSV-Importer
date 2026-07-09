import express from "express";
import cors from "cors";

import uploadRoutes from "./routes/upload.routes";

const app = express();

// Middlewares
app.use(
  cors({
    origin:
      process.env.FRONTEND_URL || "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Health Check
app.get("/", (_req, res) => {
  res.status(200).json({
    success: true,
    message: "AI Powered CSV Importer Backend is running 🚀",
  });
});

// Upload Routes
app.use("/api", uploadRoutes);

export default app;