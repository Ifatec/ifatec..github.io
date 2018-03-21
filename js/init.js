(function($){
  $(function(){

    $('.button-collapse').sideNav();
      
      $("#menu").on('click', function(event){
          $("#menu-painel").removeClass("topo-fixo");
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space