const express = require('express');
const Task = require('../models/tasks');
const router = express.Router();

router.get('/', require('../controllers/controller').home);
router.post('/new-task',require('../controllers/controller').newtask);
router.get('/delete-task',require('../controllers/controller').deletetask);
module.exports = router;