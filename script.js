$(document).ready(function() {
  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

  $('.wishlist-btn').on('click', function(e) {
    e.preventDefault();
    console.log('Product added to wishlist.');
  });
});
