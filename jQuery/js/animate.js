$(document).ready(function () {
    $("div").animate({
        width: '400px',
        left: '100px',
        opacity: '0.2',
    }, 2000, function () {
        $("span").fadeIn(10000);
    });
});