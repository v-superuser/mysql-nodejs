const express = require('express');
const router = express.Router();
const mysqlConn = require('../connection');

router.get('/', (req, res) => {
    mysqlConn.query("SELECT * from employees", (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})
router.get('/:id', (req, res) => {
    mysqlConn.query("SELECT * from employees WHERE emp_NO = ?",[req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})

router.post('/', (req, res) => {
    const query = req.query;
    var sql = `insert into employees (emp_no, birth_date, first_name, last_name, gender, hire_date) VALUES (?, ?, ?, ?, ?, ?)`
    mysqlConn.query(sql,[query.emp_no, query.birth_date, query.first_name, query.last_name, query.gender, query.hire_date], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})

router.delete('/:id', (req, res) => {
    mysqlConn.query("DELETE FROM employees WHERE emp_no = ?",[req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
})

router.put('/:id', (req, res) => {
    const query = req.query;
    var sql = `UPDATE employees SET birth_date=?, first_name=?, last_name=?, gender=?, hire_date=? WHERE emp_no=?`
    mysqlConn.query(sql,[query.birth_date, query.first_name, query.last_name, query.gender, query.hire_date, req.params.id], (err, rows, fields) => {
        if(!err) {
            res.send(rows);
        }
        else {
            console.log(err);
        }
    })
    console.log(req.body)
})

module.exports = router;