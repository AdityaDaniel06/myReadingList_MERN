const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, "Each book should have a unique id"],
    unique: true,
  },

  title: {
    type: String,
    required: [true, "Title is required"],
  },
  author: {
    type: String,
    required: [true, "Author is required"],
  },
  publicationYear: {
    type: Number,
    required: false,
  },
  pages: {
    type: Number,
    required: false,
  },
  genre: {
    type: String,
    required: false,
  },
  price: {
    type: Number,
    required: false,
  },
  read: {
    type: Boolean,
    required: false,
    default: false,
  },
});

module.exports = mongoose.model("book", bookSchema);
