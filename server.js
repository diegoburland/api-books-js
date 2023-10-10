const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

let books = [
  { id: 1, title: "Node.js for Beginners", author: "John Doe" },
  { id: 2, title: "Express.js Guide", author: "Jane Smith" },
];

//GET: Retrive all books
app.get("/books", (req, res) => {
  res.json(books);
});

//GET: Retrive a book by ID
app.get("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.json(book);
  } else {
    res.status(404).send("Book not found");
  }
});

//POST: Add a new book
app.post("/books", (req, res) => {
  const newBook = {
    id: Date.now(),
    ...req.body,
  };

  books.push(newBook);
  res.status(201).json(newBook);
});

//PUT: Update a book by ID
app.put("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  const index = books.findIndex((b) => b.id === bookId);
  if (index !== -1) {
    books[index] = { id: bookId, ...req.body };
    res.json(books[index]);
  } else {
    res.status(404).send("Book not found");
  }
});

//DELETE: Remove a book by ID
app.delete("/books/:id", (req, res) => {
  const bookId = Number(req.params.id);
  books = books.filter((b) => b.id !== bookId);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
