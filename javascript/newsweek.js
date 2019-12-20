let offsetTop = 191;
let offsetLeft1;
let offsetLeft2;

$(window).resize(function() {
   let bodyRect = document.body.getBoundingClientRect();
   let elementRect1 =  document.getElementsByClassName("col1")[0].getBoundingClientRect();
   let elementRect2 =  document.getElementsByClassName("col2")[0].getBoundingClientRect();
   
   offsetLeft1 = elementRect1.left - bodyRect.left + parseInt($('.col1').css("padding-left"));
   offsetLeft2 = elementRect2.left - bodyRect.left + parseInt($('.col2').css("padding-left"));

   $(".col1-sticky").css({
      "left": offsetLeft1,
      "width": $('.col1').innerWidth() - parseInt($('.col1').css("padding-left")) - parseInt($('.col1').css("padding-right"))
   });

   $(".col2-sticky").css({
      "left": offsetLeft2,
      "width": $('.col2').innerWidth() - parseInt($('.col2').css("padding-left")) - parseInt($('.col2').css("padding-right"))
   });

   if ($(window).outerWidth() < 992) {
      $("header").addClass("header-fixed");
   } else if ($(document).scrollTop() < 95) {
      $("header").removeClass("header-fixed");
   }
});

window.addEventListener("load", function(event) {
   let bodyRect = document.body.getBoundingClientRect();
   let elementRect1 =  document.getElementsByClassName("col1-sticky")[0].getBoundingClientRect();
   let elementRect2 =  document.getElementsByClassName("col2-sticky")[0].getBoundingClientRect();

   offsetLeft1 = elementRect1.left - bodyRect.left;
   offsetLeft2 = elementRect2.left - bodyRect.left;
});

$(window).scroll(function(){
   if ($(document).scrollTop() >= 95) {
      $("header").addClass("header-fixed");
   } else if ($(window).outerWidth() > 991) {
      $("header").removeClass("header-fixed");
   }

   if ($(window).outerWidth() > 767) {
      if ($(window).outerWidth() > 991) {
         if ($(document).scrollTop() < $(".col1-sticky").outerHeight() - window.innerHeight + offsetTop) {
            $(".col1-sticky").css("position", "static");
            
         } else if ($(document).scrollTop() >= $(".col1").outerHeight() - window.innerHeight + offsetTop) {
            let topPos = $(".col1").outerHeight() - $(".col1-sticky").outerHeight();
            
            $(".col1-sticky").css({
               "position": "absolute",
               "top": topPos,
               "left": 15
            });
         } else {
            let topPos = $(".col1-sticky").outerHeight() - window.innerHeight;
      
            $(".col1-sticky").css({
               "position": "fixed",
               "left": offsetLeft1,
               "top": -topPos,
               "width": $('.col1').innerWidth() - parseInt($('.col1').css("padding-left")) - parseInt($('.col1').css("padding-right"))
            });
         }
      }
   
      if ($(document).scrollTop() < $(".col2-sticky").outerHeight() - window.innerHeight + offsetTop) {
         $(".col2-sticky").css("position", "static");
         
      } else if ($(document).scrollTop() >= $(".col2").outerHeight() - window.innerHeight + offsetTop) {
         let topPos = $(".col2").outerHeight() - $(".col2-sticky").outerHeight();
         
         $(".col2-sticky").css({
            "position": "absolute",
            "top": topPos,
            "left": 15
         });
      } else {
         let topPos = $(".col2-sticky").outerHeight() - window.innerHeight;
         
         $(".col2-sticky").css({
            "position": "fixed",
            "left": offsetLeft2,
            "top": -topPos,
            "width": $('.col2').innerWidth() - parseInt($('.col2').css("padding-left")) - parseInt($('.col2').css("padding-right"))
         });
      } 
   } else {
      $(".col1-sticky").css({
         "position": "static",
         "width": "auto"
      });
      
      $(".col2-sticky").css({
         "position": "static",
         "width": "auto"
      });
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

   // Scroll reveal calls
   
   ScrollReveal().reveal('article', {
     duration: 600,
     scale: 0.3,
     distance: '0px',
     delay: 200
   });

   ScrollReveal().reveal('li', {
      duration: 600,
      scale: 0.3,
      distance: '0px',
      delay: 200
    });
});