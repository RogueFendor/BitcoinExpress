
var toggle_mobile_view=true;

var app ={};





// A $( document ).ready() block.
$( document ).ready(function() {
    console.log( "ready!" );
   
   // $("#wiki-sidenav").toggle("slide");
  // -------> Event handlers 
  
     // # Mobile view
  $(".button-collapse").sideNav();
  $(".brand-logo").sideNav();
     // # slide index in/out
  //$("#wiki-index").click(function(){
  	//console.log( "clicked!" );
  	//$("#wiki-sidenav").toggle("slide");
      
  //});


});
