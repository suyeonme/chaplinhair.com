// WAYPOINTS - FADE IN 
$('.wp--home-1').waypoint(function (direction) {
    $('.wp--home-1').addClass('animated fadeIn');
}, {
    offset: '50%'
});


$('.wp--home-2').waypoint(function (direction) {
    $('.wp--home-2').addClass('animated fadeIn');
}, {
    offset: '50%'
});

// IMAGE ON HOVER
$(".person-1").hover(function () {
    $(".person-1").attr("src", "img/sample-2.jpg");
}, function () {
    $(".person-1").attr("src", "img/sample-1.jpg");
});


// POPUP - OPEN AND CLOSE 
$(".popup__trigger").click(function () {
    $(".popup").show();
});

$(".popup__close").click(function () {
    $(".popup").hide();
});

// POPUP - HIDE BY CLICKING
var mouse_is_inside = false;

$(document).ready(function () {
    $('.popup__content').hover(function () {
        mouse_is_inside = true;
    }, function () {
        mouse_is_inside = false;
    });

    $("body").mouseup(function () {
        if (!mouse_is_inside) $('.popup').hide();
    });
});


// TOGGLE NAVIGATION 
$(".navigation__button").click(function () {
    $(".navigation__nav").toggle();
});

// STICKY NAVIGATION - HOME
$('.mantra').waypoint(function (direction) {
    if (direction == "down") {
        $('.navigation').addClass('sticky');
        $(".navigation__logo").attr("src", "img/logo-black.png");

    } else {
        $('.navigation').removeClass('sticky');
        $(".navigation__logo").attr("src", "img/logo-gold.png");
    }
}, {
    offset: '30%;'
});

// STICKY NAVIGATION - SUBPAGES
$('main').waypoint(function (direction) {
    if (direction == "down") {
        $('.navigation').addClass('sticky');
        $(".navigation__logo").attr("src", "img/logo-black.png");

    } else {
        $('.navigation').removeClass('sticky');
        $(".navigation__logo").attr("src", "img/logo-gold.png");
    }
}, {
    offset: '30%;'
});