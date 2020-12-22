const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/controller').home);

module.exports = router;