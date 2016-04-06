$(document).ready(function() {

    var $customizerOverlay = $('<div class="customizer-overlay" style="position: absolute; top:0; left:0; right:0; bottom:0; width: 100%; height: 100%; background: #fff; z-index: 2000;"><div class="cus-loader" style="width: 176px; height: 176px; position: absolute; top: 50%; left: 50%; margin-left: -88px; margin-top: -88px; background: url(assets/img/loading.gif) no-repeat center;"></div></div>');

    $('.toggle-style-switcher').click(function() {
        
        $('#style-switcher').toggleClass('visible');
        if($('#style-switcher').hasClass('visible')) {

            $(this).find('i').removeClass('fa-cog').addClass('fa-times');

        }else {
            $(this).find('i').removeClass('fa-times').addClass('fa-cog');

        }
    });

   

    var setColor = function() {

        // get style tag to change    
        var $styleTag = $('[data-style-switcher-color="true"]'); 
        // Get color style from localstorage 
        var colorOnLoad = localStorage.getItem("color_theme");


        if(typeof colorOnLoad != 'undefined' && colorOnLoad != '' && colorOnLoad != null) {
            $('body').attr('data-color-style', colorOnLoad);
            $('.color-list li').removeClass('selected');
            $('.color-list').on('click', 'li[data-style='+colorOnLoad+']').addClass('selected'); 
            if(colorOnLoad != 'default') {
                $('<link rel="stylesheet" data-style-added="true" href="styles'+'-'+colorOnLoad+'.css">').insertAfter($styleTag);
                //$styleTag.attr('href', 'styles'+'-'+colorOnLoad+'.css');
                
            }else {
                $('*[data-style-added="true"]').remove();
                //$styleTag.attr('href', 'styles.css');
            }       
        }else {
            $('*[data-style-added="true"]').remove();
            //$styleTag.attr('href', 'styles.css');
        }

        // Color switcher
        $('.color-list li').on('click', function() {
            
            $customizerOverlay.prependTo('body');

            var colorStyle = $(this).data('style');
            localStorage.setItem("color_theme", colorStyle);

            if(colorStyle != 'default') {
                //$styleTag.attr('href', 'styles'+'-'+colorStyle+'.css');
                $('*[data-style-added="true"]').remove();
                $('<link rel="stylesheet" data-style-added="true" href="styles'+'-'+colorStyle+'.css">').insertAfter($styleTag);
                
            }else {
                $('*[data-style-added="true"]').remove();
                //$styleTag.attr('href', 'styles.css');
            }
            $('body').attr('data-color-style', colorStyle);
            $('.color-list li').removeClass('selected');
            $(this).addClass('selected');
            
            $(document).trigger('stylesChanged');

            setTimeout(function() {
                    $customizerOverlay.fadeOut(1000, function() {
                    
                        $(this).remove();
                    
                    });

            }, 1200);

            return false;
        }); 


    };

    setColor();
    if($('.whole-site').hasClass('boxed')) { 
        $('.change-layout [data-change="boxed"]').html('<i class="fa fa-angle-left"></i> Set Wide layout <i class="fa fa-angle-right">')
        .addClass('site-is-boxed');
    } else {
        $('.change-layout [data-change="boxed"]').html('<i class="fa fa-angle-right"></i> Set Boxed layout <i class="fa fa-angle-left">')
        .removeClass('site-is-boxed').addClass('site-is-wide');          
    }    
    
    $('.change-layout [data-change="boxed"]').on('click', function() {
        
        var $thisButton = $(this);

        if($thisButton.hasClass('site-is-boxed')) {

            $thisButton.html('<i class="fa fa-angle-right"></i> Set Boxed layout <i class="fa fa-angle-left">').removeClass('site-is-boxed').addClass('site-is-wide'); 
        } else {

            $thisButton.html('<i class="fa fa-angle-left"></i> Set Wide layout <i class="fa fa-angle-right">').removeClass('site-is-wide').addClass('site-is-boxed');           
        }
    });

});
