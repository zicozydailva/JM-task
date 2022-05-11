const mongoose = require("mongoose");

function connectDB() {
    mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("DB CONNECTED SUCCESSFULLY"));
}

module.exports = connectDB