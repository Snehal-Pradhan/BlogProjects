# Request Logger API

This project demonstrates how to create a request logging middleware in Node.js with Express. The middleware logs request details for every incoming API request.

### Functionality

- **Server Setup (`src/index.mjs`)**:

  - Initializes Express server.
  - Listens on a specified port (e.g., `3000`).
  - Handles logging middleware for all incoming requests.

- **Request Logger Middleware**:

  - Logs HTTP method, URL, and timestamp for each request.

- **Routes**:

  - `GET /`: Basic route that returns a "Hello, World!" message.
  - `GET /status`: Status page showing a simple JSON response.

- **Error Handling**:
  - Handles 404 errors for non-existent routes.
- **Testing**:
  - Logs request details to the console.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `nodemon`).
- Set up a basic `src/index.mjs` file to run the server.

### 2. **Create Middleware**

- Create a custom middleware function that logs HTTP method, URL, and timestamp.
- Implement the middleware in `src/index.mjs` to log all incoming requests.

### 3. **Define Routes**

- Create a route for the homepage (`GET /`).
  - Return a simple "Hello, World!" message.
- Create a `/status` route.
  - Return a JSON object with a status message.

### 4. **Add Logging Middleware**

- Use the logging middleware in your Express app to log details of every request.
- Ensure that each request is logged with the method, URL, and timestamp.

### 5. **Handle Errors**

- Implement a fallback route that catches all undefined routes and returns a 404 error.

### 6. **Test Routes**

- Test the `/` and `/status` routes to ensure they return the expected responses.
- Test that the logger outputs the correct request details to the console.

### 7. **Final Testing**

- Test the app with multiple routes and check that the logger works as expected.
- Ensure that error handling works for undefined routes.

### 8. **Optional: Extend Functionality**

- Add additional routes or features (e.g., logging request body or headers).
- Customize the logging format (e.g., log to a file or database).

---

### Testing Guide

### 1. **Testing Routes**

- Test that the routes return the expected responses (`Hello, World!` and status JSON).

### 2. **Testing Middleware**

- Test that the middleware correctly logs request method, URL, and timestamp.

### 3. **Testing Error Handling**

- Test the error handling by visiting non-existent routes and checking for the 404 error message.

### 4. **Final Testing**

- Ensure smooth logging of requests and proper server functionality.

---

### Deployment (Optional)

Once all tasks are completed and tested, you can deploy the API to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
