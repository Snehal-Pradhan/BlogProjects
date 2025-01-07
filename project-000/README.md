# Simple Portfolio Website

This project is a simple portfolio website built with Node.js and Express. It demonstrates basic setup, routing, and serves static files.

### functionality

- **Server Setup (`server.js`)**:

  - Initializes Express server.
  - Listens on a specified port (e.g., `3000`).
  - Serves static files from `public`.

- **Routing**:

  - `GET /`: Homepage route.
  - `GET /about`: About page route.
  - `GET /projects`: Projects page route.
  - `GET /contact`: Contact page route.

- **Static Files**:

  - Serves CSS, images, and JS from `public`.

- **Error Handling**:

  - Handles 404 errors for non-existent routes.

- **Navigation Links**:

  - Links to pages like Home, About, Projects, and Contact.

- **Responsive Design**:

  - Adapts layout for desktop, tablet, and mobile screens.

- **Footer**:
  - Displays contact info or social media links.

### Task List / Procedure

### 1. **Project Setup**

- Initialize a new Node.js project using `npm init`.
- Install necessary dependencies (`express`, `nodemon`).
- Set up a basic `server.js` file to run the server.

### 2. **Create Directory Structure**

- Create a `public` directory for static assets (CSS, images, etc.).
- Create a `views` directory for HTML or template files (if using templating engine).
- Create a `routes` directory for handling API routes.

### 3. **Setup Basic Express Server**

- Set up an Express server in `server.js`.
- Make sure the server listens on a specified port (e.g., `3000`).
- Use `nodemon` for auto-reloading the server during development.

### 4. **Define Routes**

- Create a route for the homepage (`GET /`).
  - Render the homepage HTML (or EJS/Pug template).
- Create routes for other portfolio pages (e.g., About, Projects, Contact).
  - Ensure that each page has its own route.

### 5. **Create Static Files**

- Add a CSS file for styling the website in the `public` directory.
- Add any images or assets you want to display in the portfolio (e.g., profile picture, project images).

### 6. **Serve Static Files**

- Set up Express to serve static files (CSS, images) from the `public` directory.

### 7. **Implement Basic Layout**

- Create a basic layout for the homepage with sections (e.g., Introduction, Skills, Projects).
- Style the layout with the CSS file.

### 8. **Add Navigation**

- Add navigation links between pages (e.g., Home, About, Projects, Contact).

### 9. **Add Footer**

- Add a footer to each page with your contact info or social media links.

### 10. **Test Routing**

- Test each route to ensure the pages load correctly in the browser.

### 11. **Final Testing**

- Test the site for responsive design (check how it looks on different screen sizes).
- Ensure that all links and routes work correctly.

### 12. **Deployment (Optional)**

- Deploy the portfolio to a platform like Heroku or Netlify.

---

### Testing Guide

### 1. **Testing Routes**

- Test that the routes return the expected pages.
- Manually navigate to each route (e.g., `/`, `/about`, `/projects`, etc.) in the browser.

### 2. **Testing Static Files**

- Ensure images, stylesheets, and other assets are properly displayed and served.

### 3. **Testing Navigation Links**

- Test that navigation links correctly take you to the associated pages (e.g., "Home", "About", "Projects").

### 4. **Testing Layout Responsiveness**

- Test the website on different screen sizes using browser developer tools.
- Ensure that the layout adapts correctly for mobile, tablet, and desktop views.

### 5. **Testing Server**

- Test the server's functionality with tools like Postman (if applicable) for dynamic content.

### 6. **Error Handling Testing**

- Test the app's error handling by visiting non-existent routes and checking for "404 Not Found" messages.

### 7. **Final Testing**

- Ensure smooth user experience and quick loading of pages.

---

### Deployment

Once all tasks are completed and tested, you can deploy the website to platforms like [Heroku](https://heroku.com) or [Netlify](https://netlify.com) for hosting.
