import express from "express"; 

const app = express();

app.use(express.json()); // middleware to parse... JSON > JS

const usersList = [
  { id: 1, name: "Pranjal", age: 20 },
  { id: 2, name: "Nirankar", age: 20 },
  { id: 3, name: "Aniket", age: 24 },
  { id: 4, name: "Swapnil", age: 23 },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.get("/get-users", (req, res) => {
    res.json({users: usersList});
});

app.post("/add-users", (req, res) => {
    console.log(req.body);
    usersList.push(req.body);
    res.json({ message: "User added successfully", users: usersList});
});

app.put("/update-user/:id", (req, res) => {
  console.log(req.params.id);
  const userId = parseInt(req.params.id);

  const userIndex = usersList.findIndex((user) => user.id === userId);

  console.log(userIndex, "userIndex 3");

  if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  } else {
    usersList[userIndex] = { id: userId, name: req.body.name };
  }
  res.json({
    users: usersList,
    message: `User with id ${req.params.id} updated successfully`,
  });
});

app.delete("/delete-user", (req, res) => {
    console.log(req.query.user);
    const userId = parseInt(req.query.user);

    const userIndex = usersList.findIndex((user) => user.id === userId);
    if (userIndex === -1) {
    return res.status(404).json({ message: "User not found" });
  } else {
    usersList.splice(userIndex, 1);
  }
  res.json({ message: "User deleted successfully", users: usersList });
});

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});