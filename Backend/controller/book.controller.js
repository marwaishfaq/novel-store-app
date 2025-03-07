import Book from "../model/book.model.js";

export const createBook = async (req, res) => {
  console.log("Create books function called");
  try {
    console.log("Received data:", req.body);
    const books = req.body.map((book) => new Book(book));
    await Book.insertMany(books);
    console.log("Saved books:", books);
    res.status(201).json(books);
  } catch (error) {
    console.error("Error saving books:", error);
    res.status(400).json({ message: error.message });
  }
};