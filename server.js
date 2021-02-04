const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const mysqlConn = require('./connection');
const empRouter = require('./routes/employee');

var app = express();

app.use(bodyParser.json());

app.use('/emp', empRouter);


app.listen(3000)