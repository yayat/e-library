const getBooks = require('./getBooks');
const bocking = require('./bocking');

const routers = [
  ...getBooks,
  ...bocking
];

module.exports = (app) => {
  routers.forEach(router => app.use(router));
};