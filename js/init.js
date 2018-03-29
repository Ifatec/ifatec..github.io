(function ($) {
  $(function () {

    $('.button-collapse').sideNav();

    $("#menu").on('click', function (event) {
      $("#menu-painel").removeClass("topo-fixo");
    });

  }); // end of document ready

})(jQuery); // end of jQuery name space

function redirecionaUrl() {
  var current_hash = location.hash.replace(/#/,'');

  if(current_hash.length > 1 && current_hash == 'help-me') {
      window.location.href = "https://drive.google.com/drive/folders/0B9Lw4TKJ5vl6VzRVWnI2RlFPV2s";
  }
}

window.onhashchange = function() { 
  redirecionaUrl();
};

redirecionaUrl();