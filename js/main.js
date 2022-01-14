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
        $('.contenedor-mapa').toggleClass('col-xs-9 col-sm-10 col-md-10 col-lg-10')
    });
});

$(document).ready(function(){
    $('.barra-iconos').hover(function(){
        $('.icono-editar').fadeIn()
        $('.icono-opciones').css({'background-color': 'white'})
        $('.contenedor-icono-opciones').css({'background-color': '#39c'})
    }, function(){
        $('.icono-editar').fadeOut()
        $('.icono-opciones').css({'background-color': 'white', 'color': '#39c'})
        $('.contenedor-icono-opciones').css({'background-color': 'white'})
    })
});