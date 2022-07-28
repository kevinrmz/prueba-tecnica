const httpError = (res, status, message) => {
    res.status(status).send({
        "error": {
            "status": status,
            "msg": message
        }
    });
}

module.exports = { httpError }