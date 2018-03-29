(function ($) {
  $(function () {

    $('.button-collapse').sideNav();

    $("#menu").on('click', function (event) {
      $("#sidenav-overlay").css("position", "unset");
    });

    $("#nav-mobile a").on('click', function (event) {
      $('.button-collapse').sideNav('hide');
    });


  }); // end of document ready

})(jQuery); // end of jQuery name space

$('.menu-teste').click(function () {
  var id = $(this).attr("value");
  $('html, body').animate({
    scrollTop: $(id).offset().top
  }, 1500);
});



function redirecionaUrl() {
  var current_hash = location.hash.replace(/#/, '');

  if (current_hash.length > 1 && current_hash == 'help-me') {
    window.location.href = "https://drive.google.com/drive/folders/0B9Lw4TKJ5vl6VzRVWnI2RlFPV2s";
  }
}

window.onhashchange = function () {
  redirecionaUrl();
};

redirecionaUrl();