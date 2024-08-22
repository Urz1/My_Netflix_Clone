import express, { json } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import auth from "./routes/auth.js";

import userRouter from './routes/User.js'; 
import movieRoute from "./routes/Movie.js";
import listRoute from './routes/List.js'
import cors from 'cors'

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error.message);
  });

app.use("/api/auth", auth);
app.use("/api/user",userRouter);
app.use("/api/movie", movieRoute);
app.use("/api/list",listRoute)

app.listen(8000, () => {
  console.log("Listening on port 8000");
});
