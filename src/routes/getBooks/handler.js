const { data: { books } } = require('../../../config');
const { search } = require('./getBooks');
const listBookHandler = async (req, res) => {
  const { query } = req;
  console.log('itu', query)
  let result = books;
  if(query.subject) {
    console.log('sini', query)
    result = books.find(data => data.name === query.subject);
  }
  res.send(result);
  res.status(200);
};

module.exports = { listBookHandler };