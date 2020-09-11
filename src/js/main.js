$(function () {

    // img to svg   
    $('.to-svg').each(function (index, el) {
        $.imgToSvg($(this));
    });
    // resizing
    $('.js-resizing').each(function (index, el) {
        $.resizing($(this));
    });
    // MENU FIXED
    var alturamenu = $('header').offset().top;
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > alturamenu) {
            $('header').addClass('menu-fixed');
        } else {
            $('header').removeClass('menu-fixed');
        }
    });

    // Button menu responsive
    var button = $('.menu-icon');
    button.on('click', function () {
        button.toggleClass('open');
        $('.menu-responsive ul').toggleClass('active');
    });

    // OWL SLIDE
    var owl = $("#owl-news");

    if(owl.length){
        owl.owlCarousel({
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                }
            },
            nav: false,
            dots: false,
            autoplay: true
        });
    }

    if($('#slide-principal').length){
        $('#slide-principal').owlCarousel({
            autoplay: true,
            loop: true,
            items: 1,
            nav: false
        });
    }

    $.loadTabs();
});
$.imgToSvg = function (image) {
    var $img = image;
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');

    $.get(imgURL, function (data) {
        var $svg = jQuery(data).find('svg');
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        $img.replaceWith($svg);

        if ($img.hasClass('map-animate'))
            $.myScrollAnimate();
    }, 'xml');
}
$.resizing = function (element) {
    $(window).resize(function () {
        var width = element.outerWidth();
        element.css({
            "height": width * eval(element.attr('data-resizing'))
        });
        if (element.hasClass('panel')) {
            element.parent().find('.panel').css({
                "height": width * eval(element.attr('data-resizing'))
            });
        }
    }).resize();
};


$.initTabs = function(container){
    container.tabs();
};
$.loadTabs = function(){
    $('.uITabs').each(function(){
        $.initTabs($(this));
    });
};