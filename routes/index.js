(function () {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res) {
    res.render('index', {title: 'СК Сапсан - рукопашний бій у Чечельницькому ройоні'});
  });

  module.exports = router;

})();