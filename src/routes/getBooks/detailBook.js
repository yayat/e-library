const express = require('express');
const { createHandler } = require("../../utils");
const { detailBookHandler: handler } = require('./handler');

const router = express.Router();

router.get('/books/detail/:subject', createHandler(handler));

module.exports = router;