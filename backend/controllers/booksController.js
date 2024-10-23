const booksModel = require("../models/booksModel");

const addNewBook = async (req, res) => {
  //   console.log("adding new book");
  try {
    const newBook = await booksModel.create({
      id: req.body.id,
      title: req.body.title,
      author: req.body.author,
      publicationYear: req.body.publicationYear,
      genre: req.body.genre,
      pages: req.body.pages,
      read: req.body.read,
      price: req.body.price,
    });
    res.status(201).send(newBook);
  } catch (error) {
    console.error(error);
    res.status(404).send(error);
  }
};

const getAllBook = async (req, res) => {
  //   console.log("getting all books");
  try {
    const booksData = await booksModel.find();
    res.status(200).send(booksData);
    console.log(booksData);
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: error,
    });
  }
};

const deleteBook = async (req, res) => {
  //   console.log("deleting book", req.params.id);

  try {
    const book = await booksModel.findByIdAndDelete(req.params.id);
    res.status(204).json({
      status: "success",
      data: null,
    });
  } catch (err) {
    return res.status(404).json({
      status: "fail",
      message: "Invalid Data sent!",
    });
  }
};

const updateBook = async (req, res) => {
  //   console.log("getting book by id", req.params.id);
  try {
    const book = await booksModel.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      status: "success",
      data: {
        book,
      },
    });
  } catch (error) {
    res.status(404).json({
      status: "fail",
      message: "book not found!",
    });
  }
};

const getBookById = async (req, res) => {
  //   console.log("getting book by id", req.params.id);
  try {
    const book = await booksModel.findById(req.params.id);
    // const book = await booksModel.findOne({ id: req.params.id });
    if (!book) return res.status(404).send("No Book found");
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const searchBooks = async (req, res) => {
  //   console.log("getting book by id", req.params.id);
  try {
    const book = await booksModel.findOne({ id: req.params.id });
    if (!book) return res.send("No Book found");
    res.send(book);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  addNewBook,
  getAllBook,
  deleteBook,
  updateBook,
  getBookById,
  searchBooks,
};
