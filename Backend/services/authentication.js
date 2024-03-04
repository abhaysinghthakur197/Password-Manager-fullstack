const JWT = require('jsonwebtoken')

const secrte = "passwordMan@321"

function createTokenForUser (user) {

    const payload = {
        _id: user._id,
        email: user.email,
        avatar: user.avatar,
        role: user.role,
    }

    const token = JWT.sign(payload, secrte);
    return token;
}

function verifyToken (token) {
        const payload = JWT.verify(token,secrte)
        return payload
}