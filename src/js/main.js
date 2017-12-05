$(document).ready(function() {

    // Set active class on selected menu item.
    $('.nav li').click(function() {
        $('.nav li').removeClass('active');
        console.log("done!");
        $(this).addClass('active');
    });
});
