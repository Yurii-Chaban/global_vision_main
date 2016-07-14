$(function () {
	$('.hidden-menu li a').each(function () {
	    var location = window.location.href;
	    var link = this.href;
	    var result = location.match(link);
	    if(result) {
	    $(this).addClass('active');
	    }
	});
});
$(function () {
    $('.dropdown-content li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('dropdown-active');
        }
    });
});
$(function () {
    $('.footer-menu li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-footer');
        }
    });
});
$(function () {
    $('.services-list li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('active-services');
        }
    });
});
$(function () {
    $('.dropdown-content-black li a').each(function () {
        var location = window.location.href;
        var link = this.href;
        var result = location.match(link);
        if(result) {
        $(this).addClass('black-active');
        }
    });
});
$(function () {
	 $('.services-content-list ul a:first-child').each(function () {
	     var location = window.location.href;
	     var link = this.href;
	     var result = location.match(link);
	     if(result) {
	     $(this).addClass('serices-actived');
	     }
	 });
});

/*-----*/
var swiper_main = new Swiper('.swiper-container-design-mobile', {
    nextButton: '.swiper-portfolio-button-next',
    prevButton: '.swiper-portfolio-button-prev',
    paginationClickable: true,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    watchSlidesProgress: true,
    autoplayDisableOnInteraction: false
});
 var swiper_main_desctop = new Swiper('.swiper-container-design-desctop', {
    nextButton: '.swiper-portfolio-button-next',
    prevButton: '.swiper-portfolio-button-prev',
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    autoplayDisableOnInteraction: false,
    onTransitionEnd: function(swiper) { 
        var slide_count = $(".swiper-container-design-desctop .swiper-wrapper .swiper-slide").length - 6;
        $("span#slide_count").html(slide_count);
        var array_slide = $(".swiper-slide.swiper-slide-active");
        var num_slide = Number($(array_slide[1]).attr("data-swiper-slide-index")) + 1;
        $("span#num_photo").html(num_slide);
        var array_photo_name = $(".swiper-slide.swiper-slide-active img");
        var name_photo = $(array_photo_name[1]).attr("alt");
        $(".slider-title").html(name_photo);
    }
})
 var swiper_main = new Swiper('.swiper-container-blog-more', {
    nextButton: '.swiper-blog-button-next',
    prevButton: '.swiper-blog-button-prev',
    paginationClickable: true,
    loop: true,
    slidesPerView: 3,
    spaceBetween: 14,
    centeredSlides: true,
    autoplay: 3500,
    speed: 1000,
    autoplayDisableOnInteraction: false
});