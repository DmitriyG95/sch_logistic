$( document ).ready(function() {
    


    // Слайдер отзывов
    var ReviewSlider = $('.review_slider_cont')
    ReviewSlider.slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            {
              breakpoint: 650,
              settings: {
                
                rows: 2,
                slidesToShow: 1,
              }
            }
          ]
      });

      $('.review_cont .prev_slide').on('click', function() {
        ReviewSlider.slick('slickPrev');
      });
      $('.review_cont .next_slide').on('click', function() {
        ReviewSlider.slick('slickNext');
      });
    
    
      

    //   ограничение 256 символов
    var cut = document.getElementsByClassName('text_review');
    for( var i = 0; i < cut.length; i++ ){
        
        cut[i].innerText = cut[i].innerText.slice(0,255) + '...';
    }

});