const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
//router
const userRoutes = require("./routes/route.user");
//middlewares
dotenv.config();
app.use(express.json());
app.use(cors());

//app routes
app.use("/api/user", userRoutes);
//database
mongoose.connect(process.env.DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "database error:"));
db.once("open", () => console.log("Connected to the database! "));

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`App is running to port ${port}...`));
