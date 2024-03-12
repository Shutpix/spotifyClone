const mongoose = require('mongoose');

const songSchema = new mongoose.Schema({
    songName:{
        type:String,
        required: true
    },
    artist:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    track:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String, 
        required:true
    }
    
   
},{timestamps:true});

const Song = mongoose.model('Song', songSchema);
module.exports = Song;
