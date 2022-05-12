require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./utils/connectDB")

const productRoute = require("./routes/product.routes");

const app = express();
const PORT = process.env.PORT || 8081;

// MIDDLEWARES
app.use(express.json());
app.use(morgan("tiny"));

// ROUTES
app.use("/api", productRoute);

// LISTENING PORT AND DATABASE STARTER
const start = () => {
  try {
      connectDB()
    app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start()


module.exports = app