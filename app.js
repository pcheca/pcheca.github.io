$(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    if (scroll > 60) {
        $('#top').addClass("bg-white, top-lite")
    } else {
        $('#top').removeClass("bg-white, top-lite")
    }
});

