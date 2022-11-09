require('dotenv').config();
const dataBooks = require('./books.json');

const config = {
  http: {
    httpPort: process.env.HTTP_PORT,
    httpHost: process.env.HTTP_HOST
  },
  data: {
    books: dataBooks
  }
};

module.exports = config;