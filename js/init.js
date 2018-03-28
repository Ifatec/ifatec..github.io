(function($){
  $(function(){

    $('.button-collapse').sideNav();
      
      $("#menu").on('click', function(event){
          $("#menu-painel").removeClass("topo-fixo");
      });

  }); // end of document ready
})(jQuery); // end of jQuery name space


var current_hash = location.hash,
current_hash = current_hash.replace(/#/,''),
to_url = 'https://drive.google.com/drive/folders/0B9Lw4TKJ5vl6VzRVWnI2RlFPV2s';
if(current_hash.length>1){
// we have something after the #. redirect as if the # wasn't there.
    if(current_hash =="help"){
    window.location.href=(to_url);
    console.log(current_hash);
    }
}