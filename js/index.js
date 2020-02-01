/******** WAYPOINTS *********/
// Home
$('.wp--home-1').waypoint(function (direction) {
    $('.wp--home-1').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--home-2').waypoint(function (direction) {
    $('.wp--home-2').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--home-3').waypoint(function (direction) {
    $('.wp--home-3').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--home-4').waypoint(function (direction) {
    $('.wp--home-4').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--home-5').waypoint(function (direction) {
    $('.wp--home-5').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--home-6').waypoint(function (direction) {
    $('.wp--home-6').addClass('animated fadeIn');
}, {
    offset: '80%'
})

// About 
$('.wp--about-7').waypoint(function (direction) {
    $('.wp--about-7').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--about-8').waypoint(function (direction) {
    $('.wp--about-8').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--about-9').waypoint(function (direction) {
    $('.wp--about-9').addClass('animated fadeIn');
}, {
    offset: '80%'
});

/********  IMAGE ON HOVER *********/
$(".person-2").hover(function () {
    $(".person-2").attr("src", "img/sample-2.jpg");
}, function () {
    $(".person-2").attr("src", "img/sample-1.jpg");
});

$(".person-4").hover(function () {
    $(".person-4").attr("src", "img/Jeong Haemin-2.jpg"); 
}, function () {
    $(".person-4").attr("src", "img/Jeong Haemin-1.jpg");
});

$(".person-5").hover(function () {
    $(".person-5").attr("src", "img/Lee Hana-2.jpg"); 
}, function () {
    $(".person-5").attr("src", "img/Lee Hana-1.jpg");
});

$(".person-6").hover(function () {
    $(".person-6").attr("src", "img/Jung Hana-2.jpg"); 
}, function () {
    $(".person-6").attr("src", "img/Jung Hana-1.jpg");
});

$(".person-7").hover(function () {
    $(".person-7").attr("src", "img/Lee Joonha-2.jpg"); 
}, function () {
    $(".person-7").attr("src", "img/Lee Joonha-1.jpg");
});



/******** POPUP *********/ 
// open and close
$(".popup__trigger").click(function () {
    $(".popup").show();
});

$(".popup__close").click(function () {
    $(".popup").hide();
});

// hide by clicking
var mouse_is_inside = false;

$('.popup__content').hover(function () {
    mouse_is_inside = true;
}, function () {
    mouse_is_inside = false;
});

$("body").mouseup(function () {
    if (!mouse_is_inside) $('.popup').hide();
});


/********  NAVIGATION *********/
// toggle
$(".navigation__button").click(function () {
    $(".navigation__nav").toggle();
    $(".navigation__container").css({"position": "fixed"});
});

// sticky - home
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

// sticky - subpages
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



