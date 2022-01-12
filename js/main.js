(function($){
    $('.section-banner-slider .slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        fade: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 1000
    });
})(jQuery);

$(document).ready(function(){
    $("#icono-menu").click(function(){
        $('.contenedor-sidebar').toggle()
        $('.contenedor-mapa').toggleClass('col-xs-10 col-sm-10 col-md-10 col-lg-10')
    });
});

