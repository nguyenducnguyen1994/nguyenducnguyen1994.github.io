$(document).ready(function () {
    new WOW().init();
    // end wow

    window.fbAsyncInit = function () {
        FB.init({
            xfbml: true,
            version: 'v7.0'
        });
    };
    (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
    // end message


    $('#carousel-featured-album').owlCarousel({
        loop: true,
        margin: 30,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: true,
        responsive: {
            300: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 4
            }
        }
    })
    // end album nổi bật 

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
    // Góc tư vấn

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
    // end cảm nhận khách hàng



    $("#register-form").on("submit", function () {
        var idValid = true;
        if ($("#name").val().trim() == '') {
            $('#name').next('small').text('Vui lòng nhập tên!');
            idValid = false;
        } else {
            $('#name').next('small').text('');
        }
        if ($("#email").val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
            $("#email").next('small').text("Vui lòng nhập email !");
            idValid = false;
        } else {
            $("#email").next('small').text('');
        }
        if ($("#phone").val().match(/^([\(]{1}[0-9]{3}[\)]{1}[\.| |\-]{0,1}|^[0-9]{3}[\.|\-| ]?)?[0-9]{3}(\.|\-| )?[0-9]{4}$/) == null) {
            $("#phone").next('small').text("Vui lòng nhập số điện thoại !");
            idValid = false;
        } else {
            $("#phone").next('small').text('');
        }
        if ($("#message").val().trim() == '') {
            $("#message").next('small').text("Vui lòng nhập nội dung tin nhắn !");
            idValid = false;
        } else {
            $("#message").next('small').text('');
        }
        return idValid;
    })
    let uri = document.URL;
    let urinew = uri.split('?')[0];
    let uri_dec = decodeURIComponent(uri);
    let content = uri_dec.replace(/[&?]/g, '<br/>').replace(/[+]/g, ' ').replace(/[=]/g, ': ').replace('signup: Sign Up', '').replace(urinew, '');
    let splitStr = content.split('<br/>');
    let totalStr = "";
    for (let i = 0; i < splitStr.length; i++) {
        totalStr += "<br/>" + splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1).toLowerCase();
    }
    $("#username").html(totalStr);
    //end validate



    var btn = $('#toTop');
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });
    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: 0 }, '300');
    });
    // end back totop

});