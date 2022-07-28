const { httpError } = require('../helpers/handleError');
const Users = require('../models/Users');
const { encrypt, compare } = require('../helpers/handleBcrypt');
const { tokenSign } = require('../helpers/generateToken');

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await Users.findOne({ where: { email: email}});

        if (!user) {
            httpError(res, 404, 'User not found.');
        }

        const checkPassword = await compare(password, user.password);

        if (!checkPassword) {
            httpError(res, 401, 'Invalid Password.');
        }

        const tokenSession = await tokenSign(user);

        res.status(200).send({
            "data": {
                "name": user.name,
                "email": user.email,
                "updated_at": user.updatedAt,
                "created_at": user.createdAt,
                "id": user.id,
            },
            "access_token": tokenSession,
            "token_type": "Bearer",
        });
    } catch (error) {
        httpError(res, 500, error.message);
    }
}

const register = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const passwordHash = (password) ? await encrypt(password) : password;

        const registerUser = await Users.create({
            name,
            email,
            password: passwordHash,
        });

        res.status(201).send({
            "status": 201,
            "msg": "ok",
            "data": {
                "id": registerUser.id,
                "name": registerUser.name,
                "email": registerUser.email,
                "updated_at": registerUser.updatedAt,
                "created_at": registerUser.createdAt,
            }
        });
    } catch (error) {
        httpError(res, 500, 'Error while finding Product: \n ' + error.message);
    }
}

module.exports = { login, register };