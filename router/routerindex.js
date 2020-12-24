const express = require('express');
const router = express.Router();

router.get('/', require('../controllers/controller').home);
router.post('/new-task', function(req, res){
    console.log(req.body);
    return res.redirect('back');
});
module.exports = router;