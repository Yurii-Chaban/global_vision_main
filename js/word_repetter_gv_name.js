$(function () {

    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
            }
        }
        return false;
    });

    var ut_word_rotator = function () {

        var ut_rotator_words = [
                'WE <span>LOVE</span> DESIGN', 'WE <span>CREATE</span> AWESOME PROJECTS', 'WE DO<span class="nostyle"> A </span>BLEND OF <span>ART</span> AND <span>SCIENCE</span>'
            ],
            counter = 0;

        setInterval(function () {
            $("#ut_word_rotator_1 p").fadeOut(function () {
                $(this).html(ut_rotator_words[counter = (counter + 1) % ut_rotator_words.length]).fadeIn();
            });
        }, 3500);
    };

    ut_word_rotator();

    $('.lang > span').click(function () {
        $('.lang ul').toggle();
    });

    var isMobile = {
        Android: function () {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function () {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function () {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function () {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function () {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function () {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    if (isMobile.any()) {
        $('body').css("backgroundSize", 'inherit');
        $('body').css("backgroundSize", 'inherit');
        $('.video_img').css("display", 'block');
        $('.block2').css("position", "absolute");
        $('.block1').css("position", "absolute");
    }


    width = $(window).width();
    if (width < 1960) {
        //alert("asd");
        size = (1960 - width) / 2
        $('.center_img').css('margin-left', size * -1);
    }
    if (width > 1960) {
        $('.block4').css("backgroundSize", 'cover');
        $('.block5').css("backgroundSize", 'cover');
        $('.block6').css("backgroundSize", 'cover');
    }

    if (!isMobile.any()) {

        $(function () {
            var BV = new $.BigVideo();
            var vids = ['/LODKA.mp4'];
            BV.init();
            BV.show(vids, {ambient: true});
        });

        $('body').css("margin", "0");
        $('.block1').css("position", "fixed");
        new WOW().init();
    }


    $(window).scroll(function () {

        if (width < 1960) {
            if (!isMobile.any()) {


                $('.block1').css("left", -$(window).scrollLeft());
                $('.block2').css("left", -$(window).scrollLeft());
                if ($(window).scrollTop() > 650) {
                    $('.block2').css('visibility', 'hidden');
                    $('#big-video-wrap').css('visibility', 'hidden');

                } else {
                    $('.block2').css('visibility', 'visible');
                    $('#big-video-wrap').css('visibility', 'visible');
                }
                if ($(window).scrollTop() < 1500) {
                    coords = $(window).scrollTop() * -0.4 - 300;
                    $('.block4').css({backgroundPosition: 'center ' + coords + 'px'});
                }

                if ($(window).scrollTop() < 3000) {
                    coords3 = $(window).scrollTop() * -0.45 + 510;
                    $('.block6').css({backgroundPosition: '50% ' + coords3 + 'px'});
                }
            }

            if (isMobile.any()) {
                if (mob_scroll == 0 && $(window).scrollTop() > 120) {

                    mob_scroll = 1;
                }
                if ($(window).scrollTop() > 120) {
                }
                $('.block2').css("position", "absolute");
            }
        }
    });

    if (isMobile.any()) {
        if (mob_scroll == 0 && $(window).scrollTop() > 120) {
            mob_scroll = 1;
        }

    }


});

$(window).resize(function () {
    width = $(window).width();
    if (width < 1960) {
        //alert("asd");
        size = (1960 - width) / 2;
        $('.center_img').css('margin-left', size * -1);
    } else {
        $('.center_img').css('margin-left', '0');
    }
});


function feedback() {

    var msg = $('form#feedForm').serializeArray();
    $.ajax({
        type: 'POST',
        url: '/mail.php',
        data: msg,
        success: function (data) {
            $('#feedForm').html(data);
        }
    });
}
