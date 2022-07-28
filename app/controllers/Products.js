const { httpError } = require('../helpers/handleError');
const Products = require('../models/Products');

const index = async (req, res) => {
    try {
        const products = await Products.findAll();

        res.status(200).send({
            "status": 200,
	        "msg": "ok",
            "data": products
        });
    } catch (error) {
        httpError(res, 500, 'Error while finding Products: \n ' + error.message);
    }
}

const show = async (req, res) => {
    const { id } = req.params;

    try {
        const product = await Products.findByPk(id);

        if (!product) {
            return httpError(res, 404, 'Product not found');
        }

        res.status(200).send({
            "status": 200,
	        "msg": "ok",
            "data": product
        });
    } catch (error) {
        httpError(res, 500, 'Error while finding Product: \n ' + error.message);
    }
}

const store = async (req, res) => {
    const { name, description, amount } = req.body;

    try {
        const product = await Products.create({
            name,
            description,
            amount
        });

        res.status(201).send({
            "status": 201,
	        "msg": "ok",
            "data": product
        });
    } catch (error) {
        httpError(res, 500, 'Error while creating Product: \n ' + error.message)
    }
}

const update = async (req, res) => {
    const { id } = req.params;
    const { name, description, amount } = req.body;

    try {

        const product = await Products.findByPk(id);

        if (!product) {
            return httpError(res, 404, 'Product not found');
        }

        await Products.update({
            name,
            description,
            amount
        }, {
            where: { id }
        });

        res.status(204).send();
    } catch (error) {
        httpError(res, 500, 'Some error occurred while updated the Product: \n ' + error.message);
    }
}

const destroy = async (req, res) => {
    const { id } = req.params;

    try {

        const product = await Products.findByPk(id);

        if (!product) {
            return httpError(res, 404, 'Product not found');
        }

        await Products.destroy({
            where: { id }
        });

        res.status(200).send({
            "status": 200,
            "message": "Delete product: " + id,
        });
    } catch (error) {
        httpError(res, 500, 'Error removing product: \n ' + error.message);
    }
}

module.exports = { index, show, store, update, destroy }