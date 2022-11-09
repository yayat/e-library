const { data: { books } } = require('../../../config');

const bookingHandler = async (req, res) => {
  const { body: payload } = req;
  let status = 201;
  const book = books.find(book => book.name === payload.subject);
  const isAvailable = book.works.find(avail => {
    if(avail.title === payload.title) {
      let isAvail = false;
      if(avail.availability.status === 'open'){
        isAvail = true;
      }
      
      return isAvail
    }
  })
  let result = payload;
  if(!isAvailable) {
    result = 'The book you are bocking is not available';
    status = 404;
  }

  res.status(status);
  res.send(result);
};

module.exports = { bookingHandler };