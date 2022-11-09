const express = require('express');
const { createHandler } = require("../../utils");
const { listBookHandler: handler } = require('./handler');

const router = express.Router();

router.get('/books', createHandler(handler));

module.exports = router;