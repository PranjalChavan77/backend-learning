import mongoose from "mongoose";
import express from "express";

mongoose.connect("mongodb+srv://PranjalChavan:DO2JDE6UXoIAwkcv@cluster0.45nnqfb.mongodb.net/")
.then(() => console.log("Connect successfully"))
.catch((err) => console.log(err));

app.listen(8000, () => {
  console.log("Server running on port 8000");
});