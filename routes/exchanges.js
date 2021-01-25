const express = require('express');

const { getRates } = require('../controllers/exchanges');

const router = express.Router();

router
    .route('/')
    .get(getRates);


module.exports = router;