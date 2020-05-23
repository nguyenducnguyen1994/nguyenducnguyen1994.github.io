$(document).ready(function() {

    // ALBUM NỔI BẬT
    $('#carousel-featured-album').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    })


    // GÓC TƯ VẤN
    $('#carousel-advisory-corner').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })


    // CẢM NHẬN KHÁCH HÀNG
    $('#carousel-customer-comments').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        autoplay: true,
        dots: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })



    // BACK TOP
    var btn = $('#toTop');
    $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
















});