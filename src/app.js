const express = require('express');
const app = express();
const morgan = require('morgan');

app.use(morgan('dev'));
app.use(require('./routes/index'));



console.log("this is for just for test");
console.log("this is for just for test 2");


module.exports = app;