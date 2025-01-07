# Image Upload API

This project demonstrates the creation of an image upload API using Node.js and Express, with the ability to handle file uploads securely.

### Functionality

- **Server Setup (`src/index.mjs`)**:

  - Initializes Express server.
  - Listens on a specified port (e.g., `3000`).
  - Handles routing for image upload and related operations.

- **Image Upload API**:

  - `POST /upload`: A route that allows users to upload images.
  - Uses `multer` middleware to handle multipart form-data for file uploads.
  - Stores the uploaded image in a designated folder on the server.

- **Error Handling**:
  - Handles 404 errors for non-existent routes.
  - Handles 400 errors for invalid or unsupported file types.
  - Handles 500 errors for server-related issues.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `multer`).
- Set up a basic `src/index.mjs` file to run the server.

### 2. **Create Image Upload Route (`POST /upload`)**

- Create a route to handle image uploads.
- Use `multer` middleware to manage file uploads.
  - Configure the file storage options (e.g., destination folder and file name).
  - Limit file types to images (e.g., `.jpg`, `.png`, `.jpeg`).

### 3. **Configure Multer for File Storage**

- Configure `multer` to specify where to store uploaded images.
  - Store images in a specific folder (e.g., `/uploads`).
  - Optionally, generate a unique filename for each uploaded image.

### 4. **Implement Error Handling**

- Handle invalid file types by returning a 400 error.
- Handle server-related errors by returning a 500 error.
- Return appropriate messages for successful uploads.

### 5. **Test Routes**

- Test the `POST /upload` route by uploading different image files.
- Ensure that only supported file types are uploaded.
- Test error handling by attempting to upload unsupported file types.

### 6. **Final Testing**

- Ensure that uploaded images are being saved correctly in the server’s file system.
- Test for edge cases (e.g., large files, multiple uploads, unsupported file types).

---

### Testing Guide

### 1. **Testing Image Upload**

- Test the `POST /upload` route with valid image files.
- Ensure that the uploaded files are stored in the correct location.

### 2. **Testing Error Handling**

- Test the upload with unsupported file types (e.g., `.pdf`).
- Ensure the server returns appropriate error messages (400 or 500).

### 3. **Final Testing**

- Test the API with various image sizes and formats to ensure it behaves correctly with different types of inputs.

---

### Deployment (Optional)

Once the application is complete, you can deploy it to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
