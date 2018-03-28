(function ($) {
  $(function () {

    $('.button-collapse').sideNav();

    $("#menu").on('click', function (event) {
      $("#menu-painel").removeClass("topo-fixo");
    });

  }); // end of document ready

  var current_hash = location.hash.replace(/#/, '');
  var to_url = 'https://drive.google.com/drive/folders/0B9Lw4TKJ5vl6VzRVWnI2RlFPV2s';

  if (current_hash == "help-me") {
    window.location.href = (to_url);
  }
})(jQuery); // end of jQuery name space

