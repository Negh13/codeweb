$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('#scroll').addClass("sticky");
        $('.nav__header-register').addClass("background-white");
    }
    else{
        $('#scroll').removeClass("sticky");
        $('.nav__header-register').removeClass("background-white");
    }
    });
