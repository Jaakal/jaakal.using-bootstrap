$( window ).resize(function() {
   if ($(window).outerWidth() < 992) {
      $("header").addClass("header-fixed");
   } else if ($(document).scrollTop() < 95) {
      $("header").removeClass("header-fixed");
   }
});

$(window).scroll(function(){
   var windowWidth = window.innerWidth;
   var windowHeight = window.innerHeight;

   // console.log('viewport width is: '+ windowWidth + ' and viewport height is:' + windowHeight);
   // console.log($(".col2").outerHeight());
   // console.log($(".header-top").outerHeight());
   // console.log($(".col2").position().left + " -- " + $(".col2").position().top);

   // if ($(document).scrollTop() >= $(".col2").outerHeight() - window.innerHeight + $(".header-top").outerHeight()) {
   //    let topPos = $(".col2").outerHeight() - window.innerHeight + $(".header-top").outerHeight();
      
   //    $(".col2-sticky").css({
   //       "position": "fixed",
   //       "left": $(".col2").position().left,
   //       "top": -topPos,
   //       "width": $('.col2').outerWidth()
   //    });
   // }
   
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