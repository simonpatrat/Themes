var bswFancyBox = function() {
    //FANCYBOX
    //https://github.com/fancyapps/fancyBox
    $(".fancybox").fancybox({
        //openEffect: "none",
        //closeEffect: "none"
    });  
  
};

var bswMasonry = function(grid, item, colWidth) {
    var $grid = $(grid);
    var item = item;
    var colWidth = colWidth;
    $grid.masonry({
      // options
      itemSelector: item,
      columnWidth : colWidth
    });  
};

var bswIsotope = function(grid, item, colWidth) {
    var $grid = $(grid);
    var item = item;
    var colWidth = colWidth;
    $grid.isotope({
      // options
      itemSelector: item,
      masonry: {
        // use outer width of grid-sizer for columnWidth
        columnWidth: colWidth
      }
    });

    $('.folio-filter-container').on( 'click', '.btn', function(event) {
      event.preventDefault();
      var filterValue = $(this).attr('data-filter');
      $grid.isotope({ filter: filterValue });
      $('.folio-filter-container li').removeClass('active');
      $(this).closest('li').addClass('active');
    });
};

$(document).ready(function() {
    
    // FANCYBOX INIT
    bswFancyBox();
    
    // MASONRY INIT
    bswIsotope('.bsw-image-gallery','.bsw-masonry-item', '.bsw-masonry-item');
});
