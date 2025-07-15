import mongoose from "mongoose";

// 1- Create a schema
// 2- Model based off of the schema

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      requried: true,
    },
  },
  { timestamps: true }, // createdAt & updatedAt
);

const Note = mongoose.model("Note", noteSchema);

export default Note;
