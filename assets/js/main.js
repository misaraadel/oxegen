$(document).ready(function () {
    /*start the loading page */
    jQuery(".loader").fadeOut(9000);
    //scroll to top make fade for button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".scroll-top-button").addClass('active-scroll');
        } else {
            $(".scroll-top-button").removeClass('active-scroll');
        }
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 600) {
            $(".bottom-nav").addClass('active-bottom-nav');
        } else {
            $(".bottom-nav").removeClass('active-bottom-nav');
        }
    });
    //scroll to top button
    $(".scroll-top-button").on('click', function () {
        $('html , body').animate({
            scrollTop: 0
        }, 100);
    });
     //Wow intit
     wow = new WOW({
        boxClass: 'wow',
        animateClass: 'animated',
        offset: 200,
        mobile: true,
        live: false
    });
    wow.init();
    //start active navbar
    $('.nav-button').click(function(){
        $('.nav-content').addClass('active-nav');
    });
    $('.close-nav').click(function(){
        $('.nav-content').removeClass('active-nav');
    });
    
    //popup close
    $('.search-icon').click(function(){
        $('.popup').addClass('active-popup');
    });
    $('.popup-overlay').click(function(){
        $('.popup').removeClass('active-popup');
    });
    $('.popup-close').click(function(){
        $('.popup').removeClass('active-popup');
    });
    
    //start active navbar
   $('.cart-circle').click(function(){
        $('.cart-shape').addClass('active-cart');
    });
    $('.cart-overlay').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    $('.close-cart').click(function(){
        $('.cart-shape').removeClass('active-cart');
    });
    //change navbar color on scroll
    $(function () {
        $(document).scroll(function () {
            var $nav = $(".navbar-fixed-top");
            $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
    });
    //owl header screen 
    $('.owl-header').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:true,
        dots: false,
        // autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1 ,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ]
    });
    //product slider 
    $('.owl-product').owlCarousel({
        rtl: true,
        loop:true,
        margin: 10,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });
    //owl make-up 
    $('.owl-make-up').owlCarousel({
        rtl: true,
        loop:true,
        margin: 10,
        nav:true,
        dots: false,
        // autoplay: true,
        touchDrag  :false,
		mouseDrag  : false,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 2000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        items:1 ,
        navContainerClass: "container owl-nav",
		navText: [
            '<i class="fas fa-chevron-right"></i>',
            '<i class="fas fa-chevron-left"></i>'
        ]
    });
    //offers slider 
    $('.owl-offers').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:true,
        dots: false,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:2
            }
        }
    });
    //category slider 
    $('.owl-category').owlCarousel({
        rtl: true,
        loop:true,
        margin: 20,
        nav:false,
        dots: true,
        autoplay: true,
        touchDrag  : true,
		mouseDrag  : true,
		autoWidth: false,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplayTimeout: 4000,
		smartSpeed: 2000,
		dragEndSpeed: 2000,
		slidSpeed: 900,
        paginationSpeed: 900,
        autoplayHoverPause: true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
    //bottom nav
    $('.bottom-nav').click(function(){
        $('.toggler').toggleClass('active');
        $('ul').toggleClass('active');
    });
    //delete button 
    $('button').on('click',function(){
        $(this)
          .addClass("is-active")
          .delay(800)
          .queue(function(){
            $(this).removeClass("is-active").dequeue();
        });
    });
    //favorite shape
    const favorite = document.querySelectorAll('.fa-heart');
    favorite.forEach(button => {
        button.addEventListener('click' , activeClass);
    });
    //function for clickable
    function activeClass(){
        let button = this ;
        button.classList.toggle('far')
        button.classList.toggle('fas');
        button.classList.toggle('active');
    } 
    //add to cart 
    $('.order').on('click', function () {
        var cart = $('.cart-circle');
        var imgtodrag = $(this).closest('.add-product-image-effect').find("img").first();
        if (imgtodrag) {
            var imgclone = imgtodrag.clone()
                .offset({
                    
                top: imgtodrag.offset().top ,
                left: imgtodrag.offset().left
            })
                .css({
                'opacity': '0.8',
                    'position': 'absolute',
                    'height': '150px',
                    'width': '150px',
                    'border-radius': '50%',
                    'z-index': '9999'
            })
            .appendTo($('body'))
                .animate({
                'top': cart.offset().top + 10,
                    'left': cart.offset().left + 10,
                    'width': 75,
                    'height': 75
            }, 1000, 'easeInOutExpo');
            
            setTimeout(function () {
                cart.effect("shake", {
                    times: 2
                }, 200);
               
            }, 1500);

            imgclone.animate({
                'width': 0,
                    'height': 0
            }, function () {
                $(this).detach()
            });
        }
    }); 
    
});