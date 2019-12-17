$(document).ready(function() {
    $("#search").on("focus", function() {
         if ($(window).width() > 991) {
            $("#nav-search").toggleClass("stretch-to-full-width");
         } 
        
        $("#search").attr("placeholder", "");
     });

   $("#search").on("blur", function() {
      if ($(window).width() > 991) {
         $("#nav-search").toggleClass("stretch-to-full-width");
      }

      $("#search").attr("placeholder", "Search");
   });

     $(".hamburger-icon").on("click", function() {
         $(".hamburger-icon").toggleClass("rotate-full-icon");
         $(".nav-wrapper").toggleClass("display-navbar");
         $(".header-bottom").toggleClass("start-navbar-animation");
     });
});