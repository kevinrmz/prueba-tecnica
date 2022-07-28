const { verifyToken } = require('../helpers/generateToken');
const { httpError } = require('../helpers/handleError');

const checkJwtAuth = async (req, res, next) => {
    try {
        const authorization = req.headers.authorization;
        const token = authorization ? authorization.split(' ').pop() : '';
        await verifyToken(token);
        next();
    } catch (e) {
        httpError(res, 409, e.message);
    }
}

module.exports = { checkJwtAuth }