# 01-mw-contact-server

A small Express.js practice project to learn middleware, routing, and form handling.

## 📌 Practice Set Description

1. Create a new project.  
2. Install `nodemon` and `express`.  
3. Add **two dummy middlewares** that log the request **path** and **method**.  
4. Add a **third middleware** that returns a response (optional).  
5. Add route handling with two more middlewares for:
   - `/` (GET)
   - `/contact-us` (GET)
6. `/contact-us` GET route should return a **form** with:
   - **Name input**
   - **Email input**
   - Form should submit to `/contact-us` itself.
7. Handle **POST** requests to `/contact-us` using a **separate middleware**.
8. Print simple "We will contact you shortly" message after POST.

## Features

- Two dummy middlewares that log request details
- Home route (`/`)
- Contact form route (`/contact-us`)
- Form submission using POST request
- Simple response after form submission
