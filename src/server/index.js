const express = require('express');
const {
  http
} = require('../../config');
const routes = require('../routes');
const { errorHandler } = require('../utils');


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//router initialization
routes(app);

//error handler
app.use(errorHandler);


app.listen(http.httpPort, http.httpHost, () => console.log(`app running at http://${http.httpHost}:${http.httpPort}`));