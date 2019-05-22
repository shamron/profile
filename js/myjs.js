
function main() {

    (function () {
        'use strict';

        /* ==============================================
         Testimonial Slider
         =============================================== */

        $('a.page-scroll').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html,body').animate({
                        scrollTop: target.offset().top - 40
                    }, 900);
                    return false;
                }
            }
        });

        /*====================================
         Show Menu on Book
         ======================================*/
        $(window).bind('scroll', function() {
            var navHeight = $(window).height() - 500;
            if ($(window).scrollTop() > navHeight) {
                $('.navbar-default').addClass('on');
            } else {
                $('.navbar-default').removeClass('on');
            }
        });

        $('body').scrollspy({
            target: '.navbar-default',
            offset: 80
        })



        /*start of scroll up js*/
        //scroll up js
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 2000);
            return false;
        });



        <!-- =============================================== -->
        <!-- ========== scrolldown.js ========== -->
        <!-- =============================================== -->

        $('.scrolldown a').bind('click', function () {
            $('html , body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
            }, 1500, 'easeInOutExpo');
            event.preventDefault();
        });


        // main-menu-scroll

        jQuery(window).scroll(function () {
            var top = jQuery(document).scrollTop();
            var height = 300;
            //alert(batas);

            if (top > height) {
                jQuery('.navbar').addClass('menu-scroll');
            } else {
                jQuery('.navbar').removeClass('menu-scroll');
            }
        });

// scroll Up

        $(window).scroll(function(){
            if ($(this).scrollTop() > 600) {
                $('.scrollup').fadeIn('slow');
            } else {
                $('.scrollup').fadeOut('slow');
            }
        });
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 1000);
            return false;
        });

        /*end of scroll up js*/


    }());


}
main();