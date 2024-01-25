import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();

//app middlewares
app.use(express.json());

app.use("/api/user/", userRoutes);
app.use("/api/auth/", authRoutes);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("DB is connected.");
  })
  .catch((error) => {
    console.log(error);
  });

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
