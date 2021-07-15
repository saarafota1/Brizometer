var express = require('express');
var router = express.Router();
var mysqlDb = require('./../database');
 
    
/* GET cities listing. */
router.get('/', function(req, res, next) {
    db = mysqlDb.get();
    db.query('SELECT * FROM cities', function (error, results, fields) {
        if (error) {
            res.status(500).json(error);
        }
        res.status(200).json(results);
    });
    
});

module.exports = router;
