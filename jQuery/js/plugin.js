$(document).ready(function () {
    // $("button").click(function () {
    //     $("p").hide();
    //     $(this).css("color", "#F00");
    // });



    $("button").dblclick(function () {
        $("p").hide();
        $(this).css("color", "#F00");
    });

    $("button").mouseenter(function () {

        $("p").css("color", "#00F");
    });

    $("button").mouseleave(function () {
        $("p").css("color", "#0F0");
    });







});


/*$(document).ready(function () {
    $("button").hover(
        function () {
            $(this).css("color", "#00F");
            $("p").css("color", "#080");
        }
        ,
        function () {
            $(this).css("color", "#F00");
            $("p").css("color", "#676767");
        }
    );
});*/