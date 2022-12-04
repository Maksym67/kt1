// Text type animation

var typed = new Typed('.typed', {
    strings: ["Designer", "Developer", "Freelancer", "Photographer"], 
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000
});

// Scroll trigger

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

    if(scroll >= 150) {
        $("#header").addClass('header-scrolled');
        $(".back-to-top").addClass('back-to-top-active');
    } else {
        $("#header").removeClass('header-scrolled');
        $(".back-to-top").removeClass('back-to-top-active');
    }
});