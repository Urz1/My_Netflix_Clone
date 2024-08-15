import mongoose from "mongoose";

const MovieSchema = mongoose.Schema(
  {
    title: { type: String, required: true, unique: true },
    description: { type: String },
    img: { type: String },
    imgTitle: { type: String },
    imgSm:{type: String},
    trialer: { type: String },
    video:{type:String},
    year:{type:String},
    limit:{type:String},
    genre:{type:String},
    isSeries:{type:Boolean, default:false}

  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", MovieSchema);
