import mongoose from "mongoose";

const  schema=new mongoose.Schema({
  name: {
  title: String,
  description: String,
  },
  isCompleted: {
    type: Boolean,
    default: false
  },
  isDeleted: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

})

const todoschema=mongoose.model("users",schema);
export default todoschema