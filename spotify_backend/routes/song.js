const express =  require('express');
const router = express.Router();
const songController = require('../controllers/song_controller');
const passport = require('passport');

router.post('/create',passport.authenticate("jwt", {session:false}), songController.createSong);


module.exports = router;