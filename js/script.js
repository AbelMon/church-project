$(document).ready(function() {
    $("nav").hover(
        function() {
            $(this).addClass("active", 500);
    },
        function() {
            $(this).removeClass("active", 500);
        });
});