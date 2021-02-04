const mysql = require('mysql');

var mysqlConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test',
});

mysqlConn.connect((err) => {
    if(err) {
        console.log('Connection failed');
    }
    else {
        console.log('Connected.')
    }
});

module.exports = mysqlConn;