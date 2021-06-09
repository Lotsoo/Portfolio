$('.1').on('click', function (e) {
    var tujuan = $(this).attr('href');
    var elemenTujuan = $(tujuan);
    $('html, body').animate({
        scrollTop: elemenTujuan.offset().top - 50
    }, 1000, 'easeInOutExpo');

    e.preventDefault();


});




// Parallax
$(window).scroll(function () {
    var wSroll = $(this).scrollTop();
    console.log(wSroll);

    $('.jumbotron img').css({
        'transform': 'translate(0px, ' + wSroll / 4 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wSroll / 2 + '%)'
    });

    $('.jumbotron h1').css({
        'transform': 'translate(0px, ' + wSroll / 1.2 + '%)'
    });


    // Portfolio

    if (wSroll > $('.portfolio').offset().top - 250) {
        $('.portfolio .thumbnail').each(function (i) {
            setTimeout(function () {
                $('.portfolio .thumbnail').eq(i).addClass('a');
            }, 300 * (i + 1));
        });

    }





















});