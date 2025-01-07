# Bookstore API

This project demonstrates the creation of a RESTful API for managing a bookstore. The API supports operations such as adding, updating, retrieving, and deleting books, using the `fs` module to simulate a database.

### Functionality

- **Server Setup (`src/index.mjs`)**:

  - Initializes Express server.
  - Listens on a specified port (e.g., `3000`).
  - Handles routing for all bookstore-related operations.

- **CRUD Operations**:

  - `GET /books`: Retrieve a list of all books.
  - `GET /books/:id`: Retrieve a specific book by its ID.
  - `POST /books`: Add a new book to the store.
  - `PUT /books/:id`: Update details of an existing book by ID.
  - `DELETE /books/:id`: Delete a book by its ID.

- **File-based Database**:

  - Use the `fs` module to read/write book data to a JSON file (`books.json`).

- **Error Handling**:

  - Handles 404 errors for non-existent routes.
  - Handles 400 errors for invalid data.

- **Data Structure**:
  - Books are stored with fields like `id`, `title`, `author`, `price`, and `genre`.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `nodemon`).
- Set up a basic `src/index.mjs` file to run the server.

### 2. **Define Routes for CRUD Operations**

- Implement a route to retrieve a list of all books (`GET /books`).
  - Use the `fs` module to read from a `books.json` file.
- Implement a route to retrieve a single book by ID (`GET /books/:id`).
  - Search the `books.json` file for the book with the matching ID.
- Implement a route to add a new book (`POST /books`).
  - Read the `books.json` file, add a new book, and write it back to the file.
- Implement a route to update a book by ID (`PUT /books/:id`).
  - Modify the book in the `books.json` file.
- Implement a route to delete a book by ID (`DELETE /books/:id`).
  - Remove the book from the `books.json` file.

### 3. **Implement File-based Database Using `fs` Module**

- Create a `books.json` file to store books data.
  - Structure the JSON file to hold an array of book objects, each with `id`, `title`, `author`, `price`, and `genre` properties.
- Use the `fs` module to read/write to `books.json` for simulating database operations.

### 4. **Error Handling**

- Handle invalid routes by returning a 404 error.
- Handle invalid data (e.g., missing fields) by returning a 400 error.

### 5. **Test Routes**

- Test the `GET /books` and `GET /books/:id` routes to retrieve books.
- Test the `POST /books` route to add a new book.
- Test the `PUT /books/:id` route to update a book.
- Test the `DELETE /books/:id` route to delete a book.

### 6. **Validate Input Data**

- Implement validation for the `POST` and `PUT` routes to ensure proper data is provided (e.g., book title, author, etc.).

### 7. **Final Testing**

- Ensure all routes work correctly.
- Test the app for edge cases (e.g., retrieving a non-existent book, updating a book with invalid data).

---

### Testing Guide

### 1. **Testing CRUD Operations**

- Test each of the CRUD routes (`GET`, `POST`, `PUT`, `DELETE`).
- Ensure each route performs the expected action (e.g., adding, updating, deleting books).

### 2. **Testing Error Handling**

- Test invalid routes to ensure 404 errors are returned.
- Test invalid data (e.g., missing fields in `POST` or `PUT` requests) to ensure 400 errors are returned.

### 3. **Testing File-based Database**

- Test the file operations using the `fs` module to ensure the data is being read and written correctly in `books.json`.

### 4. **Final Testing**

- Test the API thoroughly by checking for consistency and proper error responses.

---

### Deployment (Optional)

Once all tasks are completed and tested, you can deploy the API to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
