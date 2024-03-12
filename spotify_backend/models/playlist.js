const mongoose=require('mongoose');


const playlistSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    thumbnail:{
        type:String,
        required:true
    },
    owner:{
        type:mongoose.Types.ObjectId,
        ref:'User'
    },
    songs:[
        {
            type:mongoose.Types.ObjectId,
            ref:'Song'
        }
    ],
});


const Playlist=mongoose.model('Playlist',playlistSchema);
module.exports=Playlist;