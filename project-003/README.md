# Blog Website

This project demonstrates the creation of a blog website using Node.js and Express with EJS as the template engine. The website allows users to perform CRUD operations for blog posts.

### Functionality

- **Server Setup (`src/index.mjs`)**:

  - Initializes the Express server.
  - Listens on a specified port (e.g., `3000`).
  - Handles routing for all blog-related operations.

- **CRUD Operations**:

  - `GET /`: Retrieve the list of all blog posts.
  - `GET /posts/:id`: Retrieve a specific blog post by its ID.
  - `POST /posts`: Add a new blog post.
  - `PUT /posts/:id`: Update a specific blog post by ID.
  - `DELETE /posts/:id`: Delete a blog post by its ID.

- **Template Engine**:

  - Use EJS for rendering dynamic HTML pages.
  - Create EJS templates for the homepage, individual blog posts, and admin interface.

- **Database Integration**:

  - Store blog data in a database (e.g., MongoDB, MySQL).
  - Define a schema for blog posts (`title`, `content`, `author`, `date`).

- **Error Handling**:
  - Handles 404 errors for non-existent routes.
  - Handles 400 errors for invalid data.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `ejs`).
- Set up a basic `src/index.mjs` file to run the server.

### 2. **Define Routes for CRUD Operations**

- Implement a route to retrieve all blog posts (`GET /`).
  - Retrieve data from the database or a mock data source.
- Implement a route to retrieve a specific post by ID (`GET /posts/:id`).
  - Fetch data from the database for the specified post.
- Implement a route to add a new blog post (`POST /posts`).
  - Accept form data and save it to the database.
- Implement a route to update a blog post by ID (`PUT /posts/:id`).
  - Update the existing post in the database.
- Implement a route to delete a blog post by ID (`DELETE /posts/:id`).
  - Remove the post from the database.

### 3. **Set Up Template Engine**

- Set up EJS to render HTML pages dynamically.
- Create EJS templates for the homepage, individual posts, and admin dashboard for CRUD operations.

### 4. **Database Integration**

- Integrate a database (e.g., MongoDB or MySQL).
- Define the schema/model for blog posts with properties like `title`, `content`, `author`, and `date`.
- Implement functions to interact with the database (e.g., find, insert, update, delete).

### 5. **Error Handling**

- Handle 404 errors for invalid routes and resources.
- Handle 400 errors for invalid data, such as missing fields in a blog post.

### 6. **Test Routes**

- Test the `GET /` and `GET /posts/:id` routes to ensure they return the correct blog posts.
- Test the `POST /posts` route to verify blog posts can be added.
- Test the `PUT /posts/:id` route to ensure blog posts can be updated.
- Test the `DELETE /posts/:id` route to ensure blog posts can be deleted.

### 7. **Final Testing**

- Verify that all CRUD operations work as expected.
- Test the functionality of the dynamic EJS pages.
- Test error handling for missing posts or invalid input.

---

### Testing Guide

### 1. **Testing CRUD Operations**

- Ensure all CRUD routes (`GET`, `POST`, `PUT`, `DELETE`) function as expected.
- Verify that blog posts are created, updated, retrieved, and deleted correctly.

### 2. **Testing Template Rendering**

- Test that EJS templates render the correct dynamic content for blog posts and the homepage.

### 3. **Testing Error Handling**

- Test invalid routes to ensure proper 404 errors are returned.
- Test invalid data (e.g., missing fields) to ensure proper 400 errors are returned.

### 4. **Final Testing**

- Perform a thorough test of the entire application, ensuring all features are working and errors are handled appropriately.

---

### Deployment (Optional)

Once the application is complete, you can deploy it to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
