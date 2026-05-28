# 03 Router Contact Server

This project continues from the earlier **01-mw-contact-server** practice.  
In this module, the same contact form server is upgraded using **Express Router**, **controllers**, **HTML files**, and **cleaner modular architecture**.

---

## Practice Requirements Completed

### 1. Parse POST body from /contact-us
- Extract `name` and `email` from the form submission.
- Log the parsed body in the terminal.
- Return a thank-you response after submission.

### 2. Move logic into separate local modules
- Created route files for cleaner routing.
- Moved logic into controller files.
- Added a reusable helper function to serve HTML files.

### 3. Move all HTML to separate `.html` files
- Home page (`home.html`)
- Contact form page (`contact.html`)
- Thank-you page / simple POST response
- Custom `404.html` page

### 4. Add a 404 Page
- Catch-all route added at the end.
- Serves a readable, user-friendly 404 HTML page.

---

## Routes Available

| Method | Path        | Description                          |
|--------|-------------|--------------------------------------|
| GET    | /           | Serve home page                      |
| GET    | /contact-us | Serve contact form                   |
| POST   | /contact-us | Log request body & return a message  |
| ALL    | *           | Custom 404 HTML page                 |

---

## Purpose of This Practice

- Continue from **01-mw-contact-server**
- Learn Express Router for better modularity
- Serve HTML through file utilities
- Parse POST request bodies manually
- Implement structured 404 routing

---
