# User Authentication System

This project demonstrates the creation of a user authentication system using Node.js and Express with database integration. Users can register, log in, and log out securely.

### Functionality

- **Server Setup (`src/index.mjs`)**:

  - Initializes the Express server.
  - Listens on a specified port (e.g., `3000`).
  - Handles routing for user authentication operations.

- **User Registration**:
  - `POST /register`: Allows new users to register by providing a username, email, and password.
  - Hashes the password before storing it in the database.
- **User Login**:

  - `POST /login`: Allows users to log in with their username and password.
  - Verifies the password and generates a session or JWT token for authenticated access.

- **User Logout**:

  - `POST /logout`: Logs the user out and destroys the session or invalidates the JWT token.

- **Database Integration**:

  - Use a database (e.g., MongoDB or MySQL) to store user credentials securely.
  - Store users with fields like `username`, `email`, and `password` (hashed).

- **Error Handling**:
  - Handles 404 errors for non-existent routes.
  - Handles 400 errors for invalid input (e.g., missing fields).
  - Handles 401 errors for unauthorized access.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `bcrypt`, `jsonwebtoken`, `mongoose` or `mysql`).
- Set up a basic `src/index.mjs` file to run the server.

### 2. **Set Up Database**

- Choose a database (e.g., MongoDB or MySQL).
- Define the schema/model for user registration, including fields like `username`, `email`, and `password`.
- Integrate the database with the Node.js server.

### 3. **Create User Registration Route (`POST /register`)**

- Create a route to handle user registration.
- Validate input fields (e.g., check if email is already taken).
- Hash the password using `bcrypt` before saving it to the database.

### 4. **Create User Login Route (`POST /login`)**

- Create a route to handle user login.
- Verify the entered password against the stored hashed password.
- Generate a JWT token for the authenticated user, or use sessions.

### 5. **Create User Logout Route (`POST /logout`)**

- Create a route to handle user logout.
- Destroy the user’s session or invalidate the JWT token.

### 6. **Implement Error Handling**

- Handle invalid routes by returning a 404 error.
- Handle missing input fields in the `POST /register` and `POST /login` routes.
- Handle incorrect login attempts by returning a 401 error.

### 7. **Test Routes**

- Test the `POST /register` route to ensure users can successfully register.
- Test the `POST /login` route to verify successful login and token generation.
- Test the `POST /logout` route to ensure the user is logged out and their session or token is invalidated.

### 8. **Final Testing**

- Ensure all authentication routes work correctly.
- Test edge cases like incorrect passwords, missing fields, and already registered email.

---

### Testing Guide

### 1. **Testing User Registration**

- Test valid registration with all required fields.
- Test invalid registration with missing or invalid fields (e.g., taken email).

### 2. **Testing User Login**

- Test valid login with correct credentials.
- Test invalid login with incorrect password or non-existent user.

### 3. **Testing User Logout**

- Ensure logout invalidates the session or JWT token.

### 4. **Final Testing**

- Ensure that all authentication routes are working as expected.
- Test edge cases like multiple login attempts, token expiration, etc.

---

### Deployment (Optional)

Once the application is complete, you can deploy it to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
