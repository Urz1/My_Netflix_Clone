import { Router } from "express";
import MovieSchema from "../models/movie.js";
import verify from "../tokenMiddleware.js";

const router = Router();

// Add a new movie
router.post("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    const newMovie = new MovieSchema(req.body);
    try {
      const savedMovie = await newMovie.save();
      return res.status(201).json(savedMovie);
    } catch (err) {
      return res.status(500).json(err);
    }
  } else {
    return res.status(403).json("You are not allowed!");
  }
});

// Update movie
router.put("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const updatedMovie = await MovieSchema.findByIdAndUpdate(
        req.params.id,
        { $set: req.body },
        { new: true }
      );
      return res.status(200).json(updatedMovie);
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You are not allowed!");
  }
});

// Delete movie
router.delete("/:id", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      await MovieSchema.findByIdAndDelete(req.params.id);
      return res.status(200).json("Movie deleted successfully");
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("You are not allowed!");
  }
});

// Get movie by ID
router.get("/find/:id", verify, async (req, res) => {
  try {
    const movie = await MovieSchema.findById(req.params.id);
    if (!movie) {
      return res.status(404).json("Movie not found");
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get random movie
router.get("/random", verify, async (req, res) => {
  const type = req.query.type;
  try {
    let movie;
    if (type === "series") {
      movie = await MovieSchema.aggregate([
        { $match: { isSeries: true } },
        { $sample: { size: 1 } }
      ]);
    } else {
      movie = await MovieSchema.aggregate([{ $sample: { size: 1 } }]);
    }
    return res.status(200).json(movie);
  } catch (error) {
    return res.status(500).json(error);
  }
});

// Get all movies
router.get("/", verify, async (req, res) => {
  if (req.user.isAdmin) {
    try {
      const allMovies = await MovieSchema.find();
      return res.status(200).json(allMovies.reverse());
    } catch (error) {
      return res.status(500).json(error);
    }
  } else {
    return res.status(403).json("Only admins can view all movies");
  }
});

export default router;
