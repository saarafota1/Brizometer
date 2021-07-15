var express = require('express');
var router = express.Router();
var mysqlDb = require('./../database');

/* GET top 5 popular Locations. */
router.get('/', function(req, res, next) {
    db = mysqlDb.get();
    db.query('SELECT ci.name, count(us.city_id) as popularity FROM user_city us join cities ci on us.city_id = ci.id group by us.city_id order by popularity desc limit 0,5', function (error, results, fields) {
        if (error) {
            res.status(500).json(error);
        }
        res.status(200).json(results);
    });
});

/* GET user selected popular Locations. */
router.get('/:user_id', function(req, res, next) {
    db = mysqlDb.get();
    db.query(`SELECT * FROM user_city us JOIN cities ci ON us.city_id = ci.id WHERE us.user_id = ${req.params.user_id}`, function (error, results, fields) {
        if (error) {
            console.log(error);
            res.status(500).json(error);
        }
        res.status(200).json(results);
    });
});

/* PUT add popular Location. */
router.put('/', function(req, res, next) {
    let city_id = req.body.city_id;
    let user_id = req.body.user_id;
    db = mysqlDb.get();
    db.query(`INSERT INTO user_city (user_id,city_id) VALUES (${user_id},${city_id})`, function (error, results, fields) {
        if (error) {
            res.status(500).json(error);
        }
        res.status(204).json(results);
    });
});

/* DELETE popular Location for user. */
router.delete('/', function(req, res, next) {
    let city_id = req.body.city_id;
    let user_id = req.body.user_id;
    db = mysqlDb.get();
    db.query(`DELETE FROM user_city WHERE user_id = ${user_id} AND city_id = ${city_id}`, function (error, results, fields) {
        if (error) {
            res.status(500).json(error);
        }
        res.status(204).json(results);
    });
});

module.exports = router;
