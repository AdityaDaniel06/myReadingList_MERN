const express = require("express");
const router = express.Router();

const booksController = require("../controllers/booksController");

// POST = to add new books
router.post("/addNewBook", booksController.addNewBook);

// GET = to get all books
router.get("/getAllBook", booksController.getAllBook);

// DELETE = to delete a book
router.delete("/deleteBook/:id", booksController.deleteBook);

// PUT = to update a book
router.put("/updateBook/:id", booksController.updateBook);

// GET = to get a book by id
router.get("/getBookById/:id", booksController.getBookById);

module.exports = router;
