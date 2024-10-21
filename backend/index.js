const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

dotenv.config({ path: "./config.env" });
app.use(express.json()); // express body parser
app.use(cors()); // cors middleware

const port = process.env.PORT || 3000;
mongoose.connect(process.env.DATABASE_NAME).then(() => {
  console.log("Database connected");
});
const booksRoutes = require("./routes/booksRoute");
app.use("/mybooks", booksRoutes);
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
