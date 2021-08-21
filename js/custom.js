    $(document).ready(function() {
        $(window).on('load', function() {          
        $(document).on('click', '.navbar-toggle', function() {
            $('.navbar-collapse').slideToggle(300);
            return false;
        }).on('click', '.navigation-menu > li > a', function() {
            $('.navbar-collapse').slideUp(300);
        }).on('click', '.next-section', function() {
            fullpage_api.moveSectionDown();
        });
        $('.facts-row').on('inview', function(event, isInView) {
            $('.count-number').each(function() {
                $(this).prop('Counter', 0).animate({
                    Counter: $(this).text()
                }, {
                    duration: 1000,
                    easing: 'swing',
                    step: function(now) {
                        $(this).text(Math.ceil(now));
                    }
                });
                setTimeout(function() {
                    $('.count-number').removeClass('count-number').addClass('counted');
                }, 1000);
            });
        });
        $('.skills-row').on('inview', function(event, isInView) {
            $(this).addClass('view');
        });
        $(document).on('click', '.menu-trigger', function() {
            $('body').toggleClass('sidemenu-open');
        }).on('click', '.side-menu .navbar-nav li a', function() {
            $('body').removeClass('sidemenu-open');
        });
    });
    });
    $(document).on('click', '.theme', function() {
    $("body").css({
        "background" : "gray",
    });
    });
