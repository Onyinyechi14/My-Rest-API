const express = require('express');
const router = express.Router();
const { getUsers, PostUser, updateUser, deleteUser} = require('./controllers/userController.js');

router.post('/', postUser)
