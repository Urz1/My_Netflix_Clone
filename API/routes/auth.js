import { Router } from "express";
import bcrypt from "bcrypt";
import User from "../models/user.js";
import jwt from "jsonwebtoken";
const router = Router();

router.post("/register", async (req, res) => {
  console.log("hi there ");

  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashedPassword,
    });
    const savedUser = await newUser.save();
    const { password, ...otherDetails } = savedUser._doc;
    res.status(200).json({ ...otherDetails });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });

    !user && res.status(401).json("Wrong password or username!");

    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.status(400).json({ message: "Wrong password credentials" });
    }

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.PASSWORD_SECRET,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;
    res.status(200).json({ ...info, accessToken });

  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
