var express = require('express');
var router = express.Router();

var article = require('../models/article');

router.get('/', function(req, res, next) {
  article.getArticles(function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);

  });
});

router.get('/:id', function(req, res, next) {
  article.getArticleById(req.params.id, function(err, article){
    if(err){
      console.log(err);
    }
    res.json(article);

  });
});

router.get('/category/:category', function(req, res, next) {
  article.getArticlesByCategory(req.params.category, function(err, articles){
    if(err){
      console.log(err);
    }
    res.json(articles);

  });
});

module.exports = router;
