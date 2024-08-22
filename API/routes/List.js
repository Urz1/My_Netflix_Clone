import { Router } from "express";
import verify from "../tokenMiddleware.js";
import listModel from "../models/list.js";

const router = Router();

// Create a new list
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newList = new listModel(req.body);
    try {
      const savedList = await newList.save();
      return res.status(201).json(savedList);
    } catch (err) {
      console.error("Error saving list:", err);
      return res.status(500).json({ message: "Error saving list" });
    }
  } else {
    return res.status(403).json("You are not allowed!");
  }
});

// Delete a list
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await listModel.findByIdAndDelete(req.params.id);
      return res.status(200).json("Delete success");
    } catch (err) {
      console.error("Error deleting list:", err);
      return res.status(500).json({ message: "Error deleting list" });
    }
  } else {
    return res.status(403).json("You are not allowed!");
  }
});

// Get lists
router.get("/", verify, async (req, res) => {
  const typeQuery = req.query.type;
  const genreQuery = req.query.genre;
  try {
    let list;
    if (typeQuery) {
      if (genreQuery) {
        list = await listModel.aggregate([
          { $match: { type: typeQuery, genre: genreQuery } },
          { $sample: { size: 10 } }
        ]);
      } else {
        list = await listModel.aggregate([
          { $match: { type: typeQuery } },
          { $sample: { size: 10 } }
        ]);
      }
    } else {
      list = await listModel.aggregate([{ $sample: { size: 10 } }]);
    }
    return res.status(200).json(list);
  } catch (error) {
    console.error("Error fetching lists:", error);
    return res.status(500).json({ message: "Error fetching lists" });
  }
});

export default router;
