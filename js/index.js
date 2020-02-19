/******** WAYPOINTS *********/
// Home
$('.wp--home-1').waypoint(function (direction) {
    $('.wp--home-1').addClass('animated fadeIn');
}, {
    offset: '60%'
});

$('.wp--home-2').waypoint(function (direction) { 
    $('.wp--home-2').addClass('animated fadeIn');
}, {
    offset: '60%'
});

$('.wp--home-3').waypoint(function (direction) {
    $('.wp--home-3').addClass('animated fadeIn');
}, {
    offset: '60%'
});

// About 
$('.wp--about-1').waypoint(function (direction) {
    $('.wp--about-1').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--about-2').waypoint(function (direction) {
    $('.wp--about-2').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--about-3').waypoint(function (direction) {
    $('.wp--about-3').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--about-4').waypoint(function (direction) {
    $('.wp--about-4').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--about-5').waypoint(function (direction) {
    $('.wp--about-5').addClass('animated fadeIn');
}, {
    offset: '80%'
});

// Join with us
$('.wp--partnership-1').waypoint(function (direction) {
    $('.wp--partnership-1').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--partnership-2').waypoint(function (direction) {
    $('.wp--partnership-2').addClass('animated fadeIn');
}, {
    offset: '80%'
});

$('.wp--partnership-3').waypoint(function (direction) {
    $('.wp--partnership-3').addClass('animated fadeIn');
}, {
    offset: '80%'
});


/********  IMAGE ON HOVER *********/
$(".person-1").hover(function () {
    $(".person-1").attr("src", "img/Park Cheonwoong-2.jpg");
}, function () {
    $(".person-1").attr("src", "img/Park Cheonwoong-1.jpg");
});

$(".person-2").hover(function () {
    $(".person-2").attr("src", "img/Wang Hanna-2.jpg");
}, function () {
    $(".person-2").attr("src", "img/Wang Hanna-1.jpg");
});

$(".person-3").hover(function () {
    $(".person-3").attr("src", "img/Park Kwansoo-2.jpg"); 
}, function () {
    $(".person-3").attr("src", "img/Park Kwansoo-1.jpg");
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

$(".person-8").hover(function () {
    $(".person-8").attr("src", "img/Kang Suyeon-2.jpg"); 
}, function () {
    $(".person-8").attr("src", "img/Kang Suyeon-1.jpg");
});

$(".person-9").hover(function () {
    $(".person-9").attr("src", "img/Kang Soojeong-2.jpg"); 
}, function () {
    $(".person-9").attr("src", "img/Kang Soojeong-1.jpg");
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


// translate with button on Subheader
$(".arrow-button").click(function() {
    $(".sub-header__text-description--ko").toggle();
});

