$('.slide').slick({
    slidesToShow: 5,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1000,
    prevArrow: '<i class="fa-solid fa-arrow-left prev"></i>',

    nextArrow: '<i class="fa-solid fa-arrow-right next"></i>',

});
$(function(){
    $(".ty").typed({
        strings: ["hank", "hank ", "hank You"],
        loop: true,
        typespeed: 1000,
        backspeed: 1000,
        startdelay: 2000,
        backdelay: 1000,
        
        
    })
})
