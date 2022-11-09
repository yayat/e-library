const { query } = require('express');
const { data: { books } } = require('../../../config');

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

const detailBookHandler = async (req, res) => {
  const { params, query } = req;
  let result = books.find(data => data.name === params.subject);

  let status = 200;

  if(query.title) {
    result = result.works.find(dataTitle => dataTitle.title === query.title)
  }
  
  if(result === undefined) {
    result = 'The data you are looking for was not found';
    status = 404;
  }
  res.status(status);
  res.send(result);
};
module.exports = { listBookHandler, detailBookHandler };