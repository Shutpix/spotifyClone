const jwt = require('jsonwebtoken');

module.exports.getToken = function(user){
    const token = jwt.sign(
        {
            sub:user._id
        },
        'shivji'
    )
    return token;
}