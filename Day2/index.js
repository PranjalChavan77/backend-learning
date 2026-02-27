import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the Home Route!");
});

app.get("/about", (req, res) => {
  res.send("This is the About Page");
});

app.get("/products", (req, res) => {
  res.send("All Products Listed Here");
});

app.get("/orders", (req, res) => {
  res.send("Your Orders History");
});

app.get("/dashboard", (req, res) => {
  res.send("User Dashboard Loaded");
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
