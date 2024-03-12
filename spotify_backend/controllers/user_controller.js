const User = require('../models/user');
const bcrypt = require('bcrypt');
const { getToken } = require('../utils/helpers');

module.exports.create = async function(req, res){ 
    const {firstName, lastName, email,username, password} = req.body;
    const user = await User.findOne({email:email});
    
    if(user){
        return res
            .status(403)
            .json({err:'User alredy exist'});
    }
    const hashPassword = await bcrypt.hash(password,10);
    const newUserData = {
            firstName, 
            lastName, 
            email,
            username,
            password : hashPassword
        };

    const newUser = await User.create(newUserData);
    newUser.save();
    const token = getToken(newUser);
    const userToReturn = {...newUser.toJSON(),token};
    return res.status(200).json(userToReturn);

}

module.exports.createSession = async function(req, res){
    const {email, password} = req.body;
    const user = await User.findOne({email:email});

    if(!user){
        return res
            .status(403)
            .json({err: "Invalid email or password"});
    }

    const isValid = await bcrypt.compare(password, user.password);
    if(!isValid){
        return res.status(403).json({err: "Invalid emial id or password"})
    }

    const token = getToken(user);
    const userToReturn = {...user.toJSON(), token}


    return res.status(200).json({userToReturn});

}