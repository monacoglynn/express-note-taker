const express = require('express');

const get = require('./get');
const post = require('./post');

const app = express;

app.use('/', get);
app.use('/api', post);

module.exports = app;