const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', 'views');


/*
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
 install with  ---- npm i body-parser
*/

const mainPage = require('./routes/mainPage');


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }))

app.use(mainPage);


app.listen(3000);