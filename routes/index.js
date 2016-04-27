var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

/* GET question page. */
router.get('/question', quizController.question);
/* GET answer page. */
router.get('/check',    quizController.check);
/* GET author page. */
router.get("/author", function(req, res) {
	res.render("author");
});

module.exports = router;