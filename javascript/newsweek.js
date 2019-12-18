$( window ).resize(function() {
   if ($(window).outerWidth() < 992) {
      $("header").addClass("header-fixed");
   } else if ($(document).scrollTop() < 95) {
      $("header").removeClass("header-fixed");
   }
});

$(window).scroll(function(){
   if ($(document).scrollTop() >= 95) {
      $("header").addClass("header-fixed");
   } else if ($(window).outerWidth() > 991) {
      $("header").removeClass("header-fixed");
   }
});

$(document).ready(function() {
   if ($(window).outerWidth() < 992) {
      $("header").addClass("header-fixed");
   } else {
      $("header").removeClass("header-fixed");
   }
   
   $("#search").on("focus", function() {
      if ($(window).outerWidth() > 991) {
         $("#nav-search").toggleClass("stretch-to-full-width");
      } 
      
      $("#search").attr("placeholder", "");
   });

   $("#search").on("blur", function() {
      if ($(window).outerWidth() > 991) {
         $("#nav-search").toggleClass("stretch-to-full-width");
      }

      $("#search").attr("placeholder", "Search");
   });

   $(".hamburger-icon").on("click", function() {
      $(".hamburger-icon").toggleClass("rotate-full-icon");
      $(".nav-wrapper").toggleClass("display-navmenu");
      $(".header-bottom").toggleClass("start-navmenu-animation");
   });
});