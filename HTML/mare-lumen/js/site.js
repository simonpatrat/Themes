(function( $ ){

    $(document).ready(function() {

            // Getting header height for better animations
            var headerH = $('.site-header').height();

                // Smooth sroll navigation        
                $('a[href*=#]:not([href=#])').click(function() {
                    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {

                        var target = $(this.hash);
                        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                        if (target.length) {

                            if($(window).scrollTop() > headerH){
                                $('html,body').animate({
                                    scrollTop: target.offset().top -80
                                }, $(window).scrollTop() / 2);
                                return false;
                            }else{
                                $('html,body').animate({
                                    scrollTop: target.offset().top -80
                                }, 2000);
                                return false;              
                            }

                        }
                    }
                });    

                // Back to top scroll animation   
                $('.back-to-top i').on('click', function(event) {
                    event.preventDefault();
                    $('body,html').animate({
                        scrollTop: 0,
                    }, 700);
                });        






            // Header Parallax scrolling and nav bar behaviour


                    $(window).scroll(function(event){

                      var win = $(this);
                      var wScroll = win.scrollTop();

                      if(wScroll > (headerH/10)){
                          $('.main-nav').addClass('pageScrolled');
                      }else{
                          $('.main-nav').removeClass('pageScrolled');
                      }

                      if(wScroll > (headerH/5)){

                          $('body').addClass('headerScrolled');


                       }else{
                            $('body').removeClass('headerScrolled');

                       }               

                       if(wScroll < headerH){

                             $('.site-title hgroup').css({
                               'transform' : 'translate(0px,'+(wScroll /2.2) +'%)'
                             })
                       }

                       if(wScroll>=$('#gallery').offset().top-(wScroll/3)){

                            $('.portfolio-item').each(function(index) {        
                                var that = this;
                                var t = setTimeout(function() { 
                                    $(that).addClass("visible"); 
                                }, 100 * index);        
                            });

                       }else{
                            $('.portfolio-item').each(function(index) {        
                                var that = this;
                                var t = setTimeout(function() { 
                                    $(that).removeClass("visible"); 
                                }, 100 * index);        
                            });         
                       } 


                    });

                
        // Fancybox initialisation
        $(".portfolio-item-icons a").fancybox();

        
        // Mobile Navigation behaviour
        $('.nav-toggle-btn').on('click', function(event){
            
            if(!$('.main-nav ul').hasClass('visible')){
                $(this).addClass('nav-is-visible');
                $('.main-nav ul').addClass('visible');  
                $('body').addClass('nav-is-visible');
            }else{
                $(this).removeClass('nav-is-visible');
                $('.main-nav ul').removeClass('visible');
                $('body').removeClass('nav-is-visible');
            }

        });

        $('.main-nav ul a').click(function() {
                $('.nav-toggle-btn').removeClass('nav-is-visible');
                $('.main-nav ul').removeClass('visible');
                $('body').removeClass('nav-is-visible');
        });
        
        // Modals
        var $modalOverlay = $('<div class="modal-overlay"></div>'); 
        $('[data-toggle="modal"]').on('click', function(event) {
          event.preventDefault();
          $('.modal-overlay').detach().remove();
          var $this = $(this);
          var $modal = $($this.data('modal-id')); 

          $('body').prepend($modalOverlay);
          
          $('.modal-overlay').addClass('overlay-visible').fadeIn(50, function() {
              $('body').addClass('ovf-hidden');
              $modal.fadeIn(300, function() {
                $(this).addClass('modal-visible');
                $(this).animate({
                  scrollTop: 0
                },0);
              });
          });
            
        });



        $(document).on('click', '.modal-overlay, .modal-close', function(event) {
          event.stopPropagation();
          console.log('clicked !');
          $('.modal').delay(200).fadeOut(300, function() {
            $(this).removeClass('modal-visible');
            $('.modal-overlay').delay(300).fadeOut(300, function() {
              $(this).removeClass('overlay-visible');
              
              $('body').removeClass('ovf-hidden');

            });
          });  
        });
 
    });

})( jQuery );

