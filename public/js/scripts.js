(function () {
  let options = {
    // algin images with different sizes
    align: true,

    // max grid cells (1-6)
    cells: 5,

    // goto next image on click
    nextOnClick: true,

    // returns text for "view all images" link if images more than five
    getViewAllText: function () {
      return 'Переглянути всі';
    }
  };

  options.images = [
    '/img/news/332.jpg',
    '/img/news/233.jpg'
  ],
  $('#1').imagesGrid(options);

  options.images = [
    '/img/news/2.jpg'
  ],
  $('#2').imagesGrid(options);

  options.images = [
    '/img/news/3.jpg',
    '/img/news/4.jpg',
    '/img/news/5.jpg',
    '/img/news/8.jpg',
    '/img/news/7.jpg',
    '/img/news/6.jpg'
  ],
  $('#3').imagesGrid(options);

  options.images = [
    '/img/news/11.jpg',
    '/img/news/12.jpg',
    '/img/news/13.jpg',
    '/img/news/14.jpg'
  ],

  $('#4').imagesGrid(options);


  options.images = [
    '/img/news/332.jpg',
    '/img/news/233.jpg'
  ],

  $('#5').imagesGrid(options);


  options.images = [
    '/img/news/332.jpg',
    '/img/news/233.jpg'
  ],

  $('#6').imagesGrid(options);

})();