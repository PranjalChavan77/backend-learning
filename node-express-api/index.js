import express from "express";
import userRoutes from "./routes/user.js";

const app = express();

const PORT = 3000;

app.use(express.json());

app.use("/user", userRoutes);

app.get("/", (req, res) => {
    res.send("Home Page");

});
app.listen(PORT, () => {
    console.log(`Server is running on port: http://localhost:${PORT}`);
});