const jwt = require('jsonwebtoken');

const tokenSign = async (user) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60*600),
        algorithm: 'RS256',
        data: {
            "_id": user.id,
            "_name": user.name,
        }
    }, process.env.JWT_SECRET);
}

const verifyToken = async (token) => {
    try {
        return jwt.verify(token, process.env.JWT_SECRET, {algorithms: ['HS256']});
    } catch (error) {
        throw new Error( error );
    }
}

module.exports = { tokenSign, verifyToken }