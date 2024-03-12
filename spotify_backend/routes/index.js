const express =  require('express');
const router = express.Router();

router.use('/users',require('./users'));
router.use('/songs', require('./song'));


module.exports = router;