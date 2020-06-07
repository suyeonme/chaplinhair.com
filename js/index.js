const strings = {
    modalCloseBtn: document.querySelector('.notice-btn'),
    modal: document.querySelector('.notice'),
    popup: '.popup',
    popupTrigger: '.popup__trigger',
    popupClose: '.popup__close',
    popupContent: '.popup__content',
    subHeaderBtn: '.arrow-button',
    translateKo: '.sub-header__text-description--ko',
    navBtn: '.navigation__button',
    navbar: '.navigation__nav',
    navigation: '.navigation',
    navLogo: '.navigation__logo',
    video: '.video',
};

/********  Modal *********/
if (strings.modal) {
    strings.modalCloseBtn.addEventListener('click', function (e) {
        e.preventDefault();
        strings.modal.parentNode.removeChild(strings.modal);
    });

    document.addEventListener('click', function (e) {
        if (strings.modal) {
            strings.modal.style.display = 'none';
        };
    });
};

/******** WAYPOINTS *********/
// Home
const offset = '80%';
const fadeIn = 'animated fadeIn';

$('.wp--home-2').waypoint(function (direction) {
    $('.wp--home-2').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--home-3').waypoint(function (direction) {
    $('.wp--home-3').addClass(fadeIn);
}, {
    offset: offset
});

// About 
$('.wp--about-1').waypoint(function (direction) {
    $('.wp--about-1').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--about-2').waypoint(function (direction) {
    $('.wp--about-2').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--about-3').waypoint(function (direction) {
    $('.wp--about-3').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--about-4').waypoint(function (direction) {
    $('.wp--about-4').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--about-5').waypoint(function (direction) {
    $('.wp--about-5').addClass(fadeIn);
}, {
    offset: offset
});

// Join with us
$('.wp--partnership-1').waypoint(function (direction) {
    $('.wp--partnership-1').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--partnership-2').waypoint(function (direction) {
    $('.wp--partnership-2').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--partnership-3').waypoint(function (direction) {
    $('.wp--partnership-3').addClass(fadeIn);
}, {
    offset: offset
});

$('.wp--partnership-4').waypoint(function (direction) {
    $('.wp--partnership-4').addClass(fadeIn);
}, {
    offset: offset
});

/******** POPUP *********/
// open and close
$(strings.popupTrigger).click(function () {
    $(strings.popup).show();
});

$(strings.popupClose).click(function () {
    $(strings.popup).hide();
});

// hide on click
var mouse_is_inside = false;

$(strings.popupContent).hover(function () {
    mouse_is_inside = true;
}, function () {
    mouse_is_inside = false;
});

$("body").mouseup(function () {
    if (!mouse_is_inside) $(strings.popup).hide();
});


/********  NAVIGATION *********/
// toggle
$(strings.navBtn).click(function () {
    $(strings.navbar).toggle();
});

// sticky - home
const navOffset = '30%';

$(strings.video).waypoint(function (direction) {
    if (direction == "down") {
        $(strings.navigation).addClass('sticky');
        $(strings.navLogo).attr("src", "img/logo-black.png");

    } else {
        $(strings.navigation).removeClass('sticky');
        $(strings.navLogo).attr("src", "img/logo-gold.png");
    }
}, {
    offset: navOffset
});

// sticky - subpages
$('main').waypoint(function (direction) {
    if (direction == "down") {
        $(strings.navigation).addClass('sticky');
        $(strings.navLogo).attr("src", "img/logo-black.png");

    } else {
        $(strings.navigation).removeClass('sticky');
        $(strings.navLogo).attr("src", "img/logo-gold.png");
    }
}, {
    offset: navOffset
});

// translate with button on Subheader
$(strings.subHeaderBtn).click(function () {
    $(strings.translateKo).toggle();
});

/********  Kakao Map  *********/
const map = document.querySelector('.root_daum_roughmap');

if (map) {
    // 봉선 행복점  
    new daum.roughmap.Lander({
        "timestamp": "1590841099405",
        "key": "ykwh",
        "mapWidth": "500",
        "mapHeight": "300"
    }).render();

    // 풍암 로얄점
    new daum.roughmap.Lander({
        "timestamp": "1583811650775",
        "key": "xfat",
        "mapWidth": "500",
        "mapHeight": "300"
    }).render();

    // 상무 진격점
    new daum.roughmap.Lander({
        "timestamp": "1583811887146",
        "key": "xfax",
        "mapWidth": "500",
        "mapHeight": "300"
    }).render();

    // 두암 시작점
    new daum.roughmap.Lander({
        "timestamp": "1583812012389",
        "key": "xfbz",
        "mapWidth": "500",
        "mapHeight": "300"
    }).render();
}