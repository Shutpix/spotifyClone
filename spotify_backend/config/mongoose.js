const mongoose = require('mongoose');
const URL_ENCODED = "mongodb+srv://spotify:spotify123@cluster0.xsjfdn1.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(URL_ENCODED)
.then(function(){
    console.log("Db Connected");
})
.catch(function(err){
    console.log("Error in connecting to db",err);
})


