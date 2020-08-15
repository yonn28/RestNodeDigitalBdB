const express = require('express');
const app = express();

app.use(morgan('dev'));

module.exports = app;