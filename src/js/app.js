
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
     
     // #----> scroll wiki
  $("#w1").click(function() {
    $('html, body').animate({
        scrollTop: $("#about").offset().top
    }, 2000);
  });
  $("#w2").click(function() {
    $('html, body').animate({
        scrollTop: $("#setup").offset().top
    }, 2000);
  });
  $("#w3").click(function() {
    $('html, body').animate({
        scrollTop: $("#android").offset().top
    }, 2000);
  });
  $("#w4").click(function() {
    $('html, body').animate({
        scrollTop: $("#dashboard").offset().top
    }, 2000);
  });
  $("#w5").click(function() {
    $('html, body').animate({
        scrollTop: $("#publishing").offset().top
    }, 2000);
  });
  $("#w6").click(function() {
    $('html, body').animate({
        scrollTop: $("#subscribing").offset().top
    }, 2000);
  });
  $("#w7").click(function() {
    $('html, body').animate({
        scrollTop: $("#IM").offset().top
    }, 2000);
  });
});
