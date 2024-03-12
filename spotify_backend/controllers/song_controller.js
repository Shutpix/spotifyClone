const Song = require('../models/song');

//create a song
module.exports.createSong = async (req, res) =>{
    const {songName, track, thumbnail} = req.body;
    const artist = req.user._id;

    if(!songName || !track || !thumbnail){
        return res.status(303).json({err: "Invalid data"});
    }

    const songData = {songName, track, thumbnail};
    const song = await Song.create(songData);
    return res.statu(200).json(song);

}
//Fetch song as per artist Or the song that artist has created

module.exports.fetchSong = async function(req, res)
{
     

}



//Get all the song that artist has published



//Get song as per song name

