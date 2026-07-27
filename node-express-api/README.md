# 🚀 Node Express REST API

A simple REST API built with **Node.js** and **Express.js** to learn the fundamentals of backend development and CRUD operations.

This project demonstrates how to build RESTful APIs using Express Router, Controllers, route parameters, request body parsing, and UUIDs for unique user identification.

> **Note:** This project uses an in-memory array as a temporary database. Data is not persisted and will reset whenever the server restarts.

---

## 🛠️ Tech Stack

- Node.js
- Express.js
- UUID
- ES Modules (Import / Export)

---

## 📂 Project Structure

```text
node-express-api/
│
├── controllers/
│   └── user.js
│
├── routes/
│   └── user.js
│
├── index.js
├── package.json
└── README.md
```

---

## ✨ Features

- Create a new user
- Retrieve all users
- Retrieve a single user by ID
- Update existing user details
- Delete a user
- RESTful API endpoints
- Controller-based architecture
- Express Router for route handling
- JSON request and response handling

---

## 📚 API Endpoints

| Method | Endpoint | Description |
| :----- | :------- | :---------- |
| GET | `/` | Home route |
| GET | `/user` | Retrieve all users |
| GET | `/user/:id` | Retrieve a user by ID |
| POST | `/user` | Create a new user |
| PATCH | `/user/:id` | Update a user |
| DELETE | `/user/:id` | Delete a user |

---

## 📨 Sample Request Body

```json
{
  "firstName": "Pranjal",
  "lastName": "Chavan",
  "age": 21
}
```

---

## 🧪 API Testing

The API can be tested using tools such as:

- Thunder Client
- Postman

---

## 📖 Concepts Practiced

- Express.js Fundamentals
- REST API Development
- CRUD Operations
- Express Router
- Controllers
- Route Parameters
- Request Body Parsing
- UUID for Unique Resource IDs
- HTTP Methods (GET, POST, PATCH, DELETE)
- JSON Responses
- ES Modules (`import` / `export`)
