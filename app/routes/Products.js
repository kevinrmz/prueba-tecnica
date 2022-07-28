const express = require('express');
const router = express.Router();
const { checkJwtAuth } = require('../middleware/authJwt');
const { index, show, store, update, destroy } = require('../controllers/Products');

router.get('/', checkJwtAuth, index);

router.get('/:id', checkJwtAuth, show);

router.post('/', checkJwtAuth, store);

router.put('/:id', checkJwtAuth, update);

router.delete('/:id', checkJwtAuth, destroy);

module.exports = router;