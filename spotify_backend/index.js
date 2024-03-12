const express = require('express');
const jwt = require('./config/jwt');
const app = express();
const passport = require('passport');
app.use(express.json());
const mongoose = require('./config/mongoose');
const port = 8080;

app.use('/', require('./routes'));



app.listen(port, function(err){
    if(err){
        console.log("Error in ruuning the server");
    }
    console.log("Server is up and running on port ", port);
})