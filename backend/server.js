const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(
	"mongodb+srv://admin:admin@cluster0.vjc67.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
	{ useNewUrlParser: true, useUnifiedTopology: true }
);
const db = mongoose.connection;
db.on("error", (error) => console.log(error));
db.once("open", () => console.log("Connected to db"));

const subscribersRouter = require("./routes/subscribers");
app.use("/subscribers", subscribersRouter);
app.use(express.json());
app.listen(3000, () => console.log("server is running"));
