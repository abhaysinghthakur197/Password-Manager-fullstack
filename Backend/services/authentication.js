const JWT = require('jsonwebtoken')

const secret = "passwordMan@321"

function createTokenForUser (user) {

    const payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
    }

    const token = JWT.sign(payload, secret);
    return token;
}

function verifyToken (token) {
        const payload = JWT.verify(token,secret)
        return payload;
}

module.exports = {
    createTokenForUser,
    verifyToken,
};