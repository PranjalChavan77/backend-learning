//Core module
const path = require("path");

//External module
const express = require("express");

//Local module
const userRouter = require("./routes/userRouter");

const { hostRouter } = require("./routes/hostRouter");

const rootDir = require("./utils/pathUtils");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(rootDir, "views"));

app.use(express.urlencoded({ extended: true }));
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorController.pageNotFound);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on address https://localhost:${PORT}`);
});
