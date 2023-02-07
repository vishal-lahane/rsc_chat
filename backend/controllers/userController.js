import expressAsyncHandler from "express-async-handler";
import { generateToken } from "../config/generateToken";
import User from "../models/UserModel";

//user signup funtionality
export const signupUser = expressAsyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  if (!name || !email || !password) {
    res.status(400);
    throw new Error("Please enter all feilds");
  }

  const userEx = await User.findOne({ email });

  if (userEx) {
    res.status(400);
    throw new Error("User already exist");
  }

  const user = await User.create({ name, email, password, pic });

  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("Failed to create user");
  }
});

//user login functionality
export const loginUser = expressAsyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      pic: user.pic,
      token: generateToken(user._id),
    });
  } else {
    res.status(401);
    throw new Error("Invalid credentials");
  }
});
