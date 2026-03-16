import mongoose from "mongoose";
import express from "express";
import todoschema from "./models/todoschema.js"

const app = express();

app.use(express.json());

app.post("/adduser", async (req, res) => {
  try {

    const { name, isCompleted, isDeleted } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Name is required"
      });
    }

    const newUser = new todoschema({
      name,
      isCompleted,
      isDeleted
    });

    await newUser.save();

    res.status(201).json({
      message: "Created successfully",
      data: newUser
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server error"
    });

  }
});

app.get("/users", async (req, res) => {
  try {

    const users = await todoschema.find();

    res.status(200).json({
      message: "All users",
      users
    });

  } catch (err) {

    console.log(err);

    res.status(500).json({
      message: "Server error"
    });

  }
});


app.patch("/update-user/:id",async(req,res)=>{
    try{
        const userID=req.params.id;
        const {isCompleted}=req.body;
        await todoschema.findByIdAndUpdate(userID,{isCompleted});
        res.status(200).json({
            message:"User updated successfully"
        })
    }catch(err){
        console.log(err);
        res.status(500).json({
            message: "Server error"
        });
    }
})


app.delete("/delete-user/:id",async(req,res)=>{
    try{
        const userId=req.params.id;
        const deleteno=await todoschema.findByIdAndDelete(userId);
        res.status(200).json({
            message:"User deleted successfully"
        })
    }
    catch(err){
        console.log(err);
        res.status(500).json({
            message: "Server error"
        });
    }
});

mongoose.connect("mongodb+srv://PranjalChavan:DO2JDE6UXoIAwkcv@cluster0.45nnqfb.mongodb.net/ToDoList")
.then(() => console.log("Connected Successfully"))
.catch( (error) => console.log(error));

app.listen(8000, () => {
    console.log("Server is running on port 8000");
}); 