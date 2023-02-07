import { Router } from "express";
import { loginUser, signupUser } from "../controllers/userController";

const userRouter = Router();

userRouter.post("/login", loginUser);
userRouter.post("/signup", signupUser);

export default userRouter;
