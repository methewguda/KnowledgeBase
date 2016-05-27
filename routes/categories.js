var express = require('express');
var router = express.Router();

var category = require('../models/category');

router.get('/', function(req, res, next) {
    category.getCategories(function(err, categories){
        if(err){
            console.log(err);
        }
        res.json(categories);

    });
});

router.get('/:id', function(req, res, next) {
    category.getCategoryById(req.params.id, function(err, category){
        if(err){
            console.log(err);
        }
        res.json(category);

    });
});

module.exports = router;
