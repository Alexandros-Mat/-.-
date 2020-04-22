$(function () {


    $(document).ready(function() {
        $('.spoiler-title').on('click', function(){
            $('.spoiler-body').toggleClass(' activ');
        });
    });

    // $(document).ready(function() {
    //     $('div a').click(function() {
    //         var clickId = $(this).attr('href');
    //         $(clickId).addClass('activ').siblings().removeClass('activ');
    //     });
    // });
    //
    // $(document).ready(function(){$('div a').click(function(){$('div a').removeClass('active');$(this).addClass('active')})});

    $("#tabs>a").click( function () {

        $("#tabs>a").removeClass("current");
        $(this).addClass("current");

        $(".tabs_content>div").hide();
        t_content=$(this).attr("href");
        $(t_content).show();

        return false
    })
    $("#tabs>a:first").trigger("click");


    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-nex',
            prevEl: '.swiper-button-pre',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
    var swiper = new Swiper('.sertivic', {
        slidesPerView: 5,
        spaceBetween: 15,
        loop: true,
        centeredSlides: true,
        navigation: {
            nextEl: '.swiper-button-nex',
            prevEl: '.swiper-button-pre',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });


});