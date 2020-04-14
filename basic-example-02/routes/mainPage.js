const express = require('express');

const path = require('path');

const indexPage = express.Router();


indexPage.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '..', 'views', 'index.ejs'))
}
)

module.exports = indexPage;