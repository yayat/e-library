const { data: { books } } = require('../../../config');
const { search } = require('./getBooks');
const listBookHandler = async (req, res) => {
  const { query } = req;
  let result = books;
  let status = 200;
  if(query.subject) {
    result = books.find(data => data.name === query.subject);
  }

  if(result === undefined) {
    result = 'The data you are looking for was not found';
    status = 404;
  }
  res.status(status);
  res.send(result);
};

module.exports = { listBookHandler };