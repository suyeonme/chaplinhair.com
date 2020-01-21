// WAYPOINTS
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


// OPEN AND CLOSE A POPUP
$(".popup__trigger").click(function () {
    $(".popup").show();
});


$(".popup__close").click(function () {
    $(".popup").hide();
});