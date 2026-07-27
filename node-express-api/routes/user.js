import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/user.js";

const user = express.Router();

let users = [];

user.get("/", getUsers);

user.post("/", createUser);

user.get("/:id", getUser);

user.delete("/:id", deleteUser);

user.patch("/:id", updateUser);

export default user;
