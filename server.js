// server.js
const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('./models/User');

// Load environment variables
dotenv.config();

const app = express();
app.use(express.json());

app.use('/User', require('./routes/userRoutes'))

app.listen(PORT,() => console.log(`Server started at ${PORT}`))