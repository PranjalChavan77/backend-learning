# 🏡 02-airbnb-backend

A simple Express.js practice project built to learn routing, form handling, serving HTML files, and organizing backend code using Express Router.

## 📌 Practice Project Description

1. Create a new Express.js project named airbnb-backend.
2. Install `nodemon` and `express`.
3. Create the following folders: routes/ ,views/, utils/
4. Set up Express Router and create two routers:
   - userRouter for home route (/)
   - hostRouter for hosting routes (/host/...)
5. Home route (/) should serve an HTML file that:
   - Welcomes the user
   - Provides a link to Add Home page
6. /host/add-home GET route should return a form that includes:
   - House name input
   - Submit Button
7. The form should submit to /host/add-home using the POST method.
8. Handle POST request on /host/add-home and show a:
   - “Home Added Successfully” HTML page
9. Use express.urlencoded() middleware to handle form data.
10. Use a helper file pathUtils.js to manage root directory paths.
11. Add a 404 HTML page for all unmatched routes.

## ✨ Features

- Clean Express.js app structure
- Modular routing using Express Router
- Home page served using sendFile()
- Hosting routes with GET + POST handling
- HTML form submission using POST
- Path helper for simplified file path management
- Custom 404 Not Found HTML page
- Beginner-friendly, clear backend design

