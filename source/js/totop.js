$(window).scroll(function() {
        $(window).scrollTop() > 100 ? $("#rocket").addClass("show") : $("#rocket").removeClass("show");
    });
    $("#rocket").click(function() {
        $("#rocket").addClass("launch");
        $("html, body").animate({
            scrollTop: 0
        }, 600, function() {
            $("#rocket").removeClass("show launch");
        });
        return false;
    });
