require("dotenv").config();
const express = require('express');
const morgan = require("morgan");

const app = express()
const PORT = process.env.PORT || 5001

// MIDDLEWARES
app.use(express.json())
app.use(morgan('tiny'))


// LISTENING PORT
app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`))