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

router.post('/', function(req, res, next){
  //GET from values
  var title = req.body.title;
  var category = req.body.category;
  var body = req.body.body;

  //Article Object
  var newArticle = new Article({
    title:title,
    category: category,
    body: body
  });

  //Create Article
  Article.createArticle(newArticle, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });

});

router.put('/', function(req, res, next){
  var id = req.body.id;
  var data = {
    title: req.body.title,
    category: req.body.category,
    body: req.body.body
  };

  //Update Article
  Article.updateArticle(id, data, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});

router.delete('/:id', function(req, res, next){
  var id = req.body.id;

  //Remove Article
  Article.updateArticle(id, function(err, article){
    if(err){
      console.log(err);
    }

    res.location('/articles');
    res.redirect('/articles');
  });
});

module.exports = router;
