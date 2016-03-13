$(document).ready(function() {

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
                $styleTag.attr('href', 'styles'+'-'+colorOnLoad+'.css');
                
            }else {
                $styleTag.attr('href', 'styles.css');
            }       
        }else {
            $styleTag.attr('href', 'styles.css');
        }

        // Color switcher
        $('.color-list li').on('click', function() {

            var colorStyle = $(this).data('style');
            localStorage.setItem("color_theme", colorStyle);

            if(colorStyle != 'default') {
                $styleTag.attr('href', 'styles'+'-'+colorStyle+'.css');
                
            }else {
                $styleTag.attr('href', 'styles.css');
            }
            $('body').attr('data-color-style', colorStyle);
            $('.color-list li').removeClass('selected');
            $(this).addClass('selected');
            return false;
        }); 


    };

    
    setColor();


});
