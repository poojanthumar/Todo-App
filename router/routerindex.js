const express = require('express');
const Task = require('../models/tasks');
const router = express.Router();


//Serving / Request
router.get('/', require('../controllers/controller').home);

//Serving adding task request
router.post('/new-task',require('../controllers/controller').newtask);

//Serving deleting Task Request
router.get('/delete-task',require('../controllers/controller').deletetask);
module.exports = router;