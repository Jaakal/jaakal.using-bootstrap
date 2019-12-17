$(document).ready(function() {
    $("#search").on("focus", function (){
        $("#nav-search").toggleClass("stretch-to-full-width");
        $("#search").attr("placeholder", "");
     });

     $("#search").on("blur", function (){
        $("#nav-search").toggleClass("stretch-to-full-width");
        $("#search").attr("placeholder", "Search");
     });
});