import { Router } from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
// import CryptoJS from "crypto-js";
import verify from "../tokenMiddleware.js";

const router = Router();

// Update user details
router.put("/:id", verify, async (req, res) => {
  console.log(req.user.id)
  console.log(req.params.id)
  if (req.user.id === req.params.id || req.user.isAdmin) {

    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        req.params.id,
        {
          $set: req.body,
        },
        { new: true }
      );
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
});

//DElete
router.delete("/:id", verify, async (req, res) => {
  if (req.user.id === req.params.id || req.user.isAdmin) {
    if (req.body.password) {
      const salt = await bcrypt.genSalt(10);
      req.body.password = await bcrypt.hash(req.body.password, salt);
    }

    try {
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json(userDeleted);
    } catch (err) {
      res.status(500).json(err);
    }
  } else {
    res.status(403).json("You can update only your account!");
  }
});
//get
router.get("/find/:id", async (req, res) => {
  console.log(req.params.id)
  try {
    const findUser = await User.findById(req.params.id)
    const {password,...otherDetial} = findUser._doc;
    res.status(200).json(otherDetial)
  } catch (error) {
    res.status(500).json(error)
  }
});
//Get ALL
router.get("/", async (req, res) => {
  if (req.body.isAdmin){
  try {
    const findUser = await User.find()
    res.status(200).json(findUser)
  } catch (error) {
    res.status(500).json(error)
  }}
  else{
    res.send(403).json("you are not allowed to see this")
  }

});

//GEt user Statistics

export default router;
