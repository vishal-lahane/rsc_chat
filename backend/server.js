import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import userRouter from "./routes/userRoutes";
import { errorHandler, notFound } from "./middlewares/errorMiddleware";

const app = express();
dotenv.config();

connectDB();
app.use(express.json());

app.use("/auth", userRouter);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
