const express = require('express');
const { createHandler } = require("../../utils");
const { bookingHandler: handler } = require('./handler');

const router = express.Router();

router.post('/bocking', createHandler(handler));

module.exports = router;