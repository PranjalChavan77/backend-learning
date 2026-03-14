import express, { application } from "express"; 
import MainRouter from "./routes/index.js";
import mongoose from "mongoose";
import dotenv from "dotenv";
import UserSchema from "./models/user.schema.js";

dotenv.config();

const app = express();

app.use(express.json()); // middleware to parse... JSON > JS

function validateUserBody(req, res, next) {
  if (!req.body?.username || !req.body?.password) {
    return res
      .status(400)
      .json({ message: "Username and password are required" });
  } else {
    return next();
  }
  console.log("This is a middleware function");
};

app.post("/login", validateUserBody, (req, res) => {
  res.send("Login successful");
});

const usersList = [
  { id: 1, name: "Pranjal", age: 20 },
  { id: 2, name: "Nirankar", age: 20 },
  { id: 3, name: "Aniket", age: 24 },
  { id: 4, name: "Swapnil", age: 23 },
];

app.get("/", (req, res) => {
  res.send("Server is running");
});

app.use("/api/v1", MainRouter);

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

app.get("/add-user", async  (req, res) => {
  try {
    const { name, email, password } = req.body;
    if ( !name || !email || !password ) {
      return res
      .status(400)
      .json({ message: "Name, Email and Password are required"});
    }
    const newUser = new UserSchema({
      name: name,
      email: email,
      password: password,
    });
    console.log(newUser, "newUser");

    await newUser.save();
    return res
    .status(201)
    .json({ message: "User added successfully", user: newUser});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal Server Error" });
  }
});

app.post("/get-users", async (req, res) => {
  try {
    const users = await UserSchema.find({ isActive: true });
    return res
    .status(200)
    .json({ users: users, message: "Users fetched successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.patch("/update-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "email is required"});

    const updatedUser = await UserSchema.findByIdAndUpdate(userId, { email }, { new: true });
    console.log(updatedUser, "updatedUser");
    return res.status(200).json({ message: "User updated successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

app.delete("/delete-user/:id", async (req, res) => {
  try {
    const userId = req.params.id;

    await UserSchema.findByIdAndDelete(
      userId,
      { isActive: false });
    return res.status(200).json({ message: "User deleted successfully"});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Internal server error" });
  }
});

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB", err);
  });

app.listen(8000, () => {
    console.log("Server is running on port 8000");
}); 