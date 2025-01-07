# Secure Login API

This project demonstrates the creation of a secure login API using Node.js, Express, and JWT for authentication and authorization.

### Functionality

- **Server Setup (`src/index.mjs`)**:

  - Initializes Express server.
  - Listens on a specified port (e.g., `3000`).
  - Handles routing for user authentication and authorization operations.

- **User Authentication**:

  - `POST /login`: Allows users to log in with their credentials (username/email and password).
  - Verifies the user’s credentials and generates a JWT token.

- **Authorization with JWT**:

  - `GET /protected`: A protected route that requires the user to be authenticated via a valid JWT token.
  - Uses middleware to verify the JWT token before accessing the protected route.

- **Error Handling**:
  - Handles 404 errors for non-existent routes.
  - Handles 401 errors for unauthorized access or invalid tokens.
  - Handles 400 errors for invalid input.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `jsonwebtoken`, `bcrypt`, `mongoose` or `mysql`).
- Set up a basic `src/index.mjs` file to run the server.

### 2. **Create User Authentication Route (`POST /login`)**

- Create a route to handle user login.
- Validate the username/email and password.
- Use `bcrypt` to compare the entered password with the stored hashed password.
- If successful, generate and return a JWT token.

### 3. **Create Authorization Middleware**

- Create a middleware function to validate the JWT token in the request headers.
- The middleware should check for a valid token and decode it to retrieve the user’s data.

### 4. **Create Protected Route (`GET /protected`)**

- Create a protected route that only allows access if the user provides a valid JWT token.
- Use the authorization middleware to verify the token before allowing access.

### 5. **Implement Error Handling**

- Handle invalid routes by returning a 404 error.
- Handle missing or invalid authentication tokens by returning a 401 error.
- Handle incorrect credentials in the login route by returning a 400 or 401 error.

### 6. **Test Routes**

- Test the `POST /login` route to ensure that valid login credentials return a JWT token.
- Test the `GET /protected` route to ensure it works only with a valid JWT token.

### 7. **Final Testing**

- Ensure that the JWT token is being issued correctly.
- Test for edge cases, such as expired tokens or invalid tokens.

---

### Testing Guide

### 1. **Testing User Authentication**

- Test the `POST /login` route with valid credentials and verify the JWT token is returned.
- Test with incorrect credentials and ensure a 400 or 401 error is returned.

### 2. **Testing Authorization**

- Test the `GET /protected` route with valid and invalid JWT tokens.
- Ensure that users without a valid token receive a 401 error.

### 3. **Final Testing**

- Ensure all authentication and authorization routes are functioning as expected.
- Test edge cases like expired JWT tokens.

---

### Deployment (Optional)

Once the application is complete, you can deploy it to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
