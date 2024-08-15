import { Router } from "express";
import CryptoJS from "crypto-js";
import User from "../models/user.js";

const router = Router();

router.post("/register", async (req, res) => {
  try {
    const encryptedPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASSWORD_SECRET
    ).toString();

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: encryptedPassword,
    });

    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ message: error.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ message: "Wrong email or password" });
    }

    const bytes = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASSWORD_SECRET
    );
    const decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);

    if (decryptedPassword !== req.body.password) {
      return res.status(400).json({ message: "Wrong password credentials" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: error.message });
  }
});
export default router;
