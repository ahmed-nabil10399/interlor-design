$(document).ready(function () {

    // carousel header
    $('header .owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay: true,
        animateOut: 'fadeOut',
        smartSpeed: 450,
    });


    // carousel brandes
    $('.brandes .owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        margin:50,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:6,
            }
        }
    });

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
    
        // show links
        $('.mune-spans').click(function () {
            $('.mune-links').addClass('mune-links-open')
        })

        // hide links
        $('.fa-times').click(function () {
            $('.mune-links').removeClass('mune-links-open')
        });

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

        // toggle nav
        $(window).scroll(function () {
            if($(this).scrollTop() >=30 ){
                $('.header-left').fadeOut(500);
                $('.nav-top').fadeIn(500);
            } else {
                $('.header-left').fadeIn(500);
                $('.nav-top').fadeOut(500);
            }
        })

        $(window).resize(function () {
            $(window).scroll(function () {
                if($(this).scrollTop() >=30 ){
                    $('.header-left').fadeOut(500);
                    $('.nav-top').fadeIn(500);
                } else {
                    $('.header-left').fadeIn(500);
                    $('.nav-top').fadeOut(500);
                }
            })
        })

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////

        // progress about
        let counters = document.querySelectorAll('.about .about-h4');
        let delay = 250;

        counters.forEach(counter => {

            const updateConut = () => {

                const target = counter.getAttribute('data-target');
                const count = +counter.innerText;
                const speed = target /delay;

                if (count < target) {
                    counter.innerText = Math.floor(count + speed);

                    setTimeout(updateConut, 2);
                } else {
                    counter.innerText = target
                }
            }

            updateConut();
        });

// ///////////////////////////////////////////////////////////
// ///////////////////////////////////////////////////////////
        
        // coundDown
        let cound = $('.special-left-numbers').html();
        
        $('.special-left-numbers').countdown('2023/01/01', function(event) {
            $(this).html(event.strftime(cound));
          });

//   ///////////////////////////////////////

          let link = $('link[data-color="switch"]');
          let logo = $('.brand img');
          
          $('.fa-moon').click(function () {

            $('.fa-moon').toggleClass('fas'); 
              if(link.attr('href') == 'css/style-dark.css') {
                  link.attr('href', 'css/style-light.css')

                  logo.attr('src', 'img/logo-dark.png')

              } else {
                link.attr('href', 'css/style-dark.css')
                logo.attr('src', 'img/logo.png')
              }
          });

});