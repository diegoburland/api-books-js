# Express Book API

A simple CRUD (Create, Read, Update, Delete) API for books, built with Node.js and Express.

## Features

- Retrieve all books or a single book by its ID.
- Add a new book.
- Update a book's details.
- Delete a book by its ID.

## Prerequisites

- [Node.js](https://nodejs.org/) and npm.

## Installation

1. Clone this repository or download it:
    ```bash
    git clone [YOUR_REPO_URL]
    cd express-book-api

2. Install the necessary dependencies:
    ```bash
    npm install
3. Run the server:
    ```bash
    node server.js
4. Visit http://localhost:3000 in your browser or use a tool like Postman to interact with the API.

## Endpoints
- GET /books - Retrieve all books.
- GET /books/:id - Retrieve a book by its ID.
- POST /books - Add a new book. Requires a JSON body with title and author.
- PUT /books/:id - Update a book by its ID. Requires a JSON body with title and/or author.
- DELETE /books/:id - Delete a book by its ID.

## Contributions
Contributions are welcome. Please feel free to open an issue or make a pull request.

## License
MIT