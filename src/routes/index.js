const getBooks = require('./getBooks');

const routers = [
  ...getBooks
];

module.exports = (app) => {
  routers.forEach(router => app.use(router));
};