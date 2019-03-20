(function () {
  var express = require('express');
  var router = express.Router();

  /* GET home page. */
  router.get('/', function (req, res) {
    res.render('index', {title: 'СК Сапсан - рукопашний бій у Чечельницькому районі'});
  });

  /* GET coach page. */
  router.get('/coach', function (req, res) {
    res.render('coach', {title: 'Таранець Дмитро - тренер СК Сапсан'});
  });

  module.exports = router;

})();