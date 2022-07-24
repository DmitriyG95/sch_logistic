$(document).ready(function() {    

    $('#tabs li a:first').addClass('active');
    $('.transportation_tab__container').hide();
    $('.transportation_tab__container:first').show();
        
    $('#tabs li a').click(function(){
        var t = $(this).attr('data-id');
      if($(this).hasClass('active')){ 
        
     } else {
        $('#tabs li a').removeClass('active');           
        $(this).addClass('active');
        
        $('.transportation_tab__container').hide();
        $('#'+ t ).fadeIn('slow');
     }
    });



    // слайдер
    const swiperCase = new Swiper('.slider_help__cont .swiper', {

      loop: false,
      slidesPerView: 1,
      spaceBetween: 0,
      observer: true,
      observeParents: true,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 0
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        990: {
          slidesPerView: 4,
          spaceBetween: 20
        }
      },
      navigation: {
        nextEl: '.slider_help__cont .swiper-button-next',
        prevEl: '.slider_help__cont .swiper-button-prev',
      },

      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });






    $('.js-select-1').niceSelect();

    $('.js-select-1 .list li').on('click', function(){
      var attribut = $(this).attr('data-value')
      $('.transportation_tab__container').hide();
        $('#'+ attribut ).fadeIn('slow');
        swiperCase.slideNext()
    })


    $('#city').niceSelect();



    // слайдер отправок по городам
    document.querySelectorAll('.pricetable_sliders .pricetable_slider').forEach(n => {
      const priceTableSlider= new Swiper(n.querySelector('.swiper'), {
          slidesPerView:1,
      spaceBetween: 0,
      loop: true,
      navigation: {
          nextEl:n.querySelector('.swiper-button-next') ,
          prevEl:n.querySelector('.swiper-button-prev') ,
        },
      
      });
    });

    $('.pricetable_sliders .pricetable_slider:not(:first-child)').hide()

    $('.pricetable_city__choose .list li').on('click', function(e){
      e.preventDefault();
      var attrLi = $(this).attr('data-value')
      $('.pricetable_sliders .pricetable_slider').each(function(index,element){
        if($(element).attr('data-city')==attrLi) {
          $(element).show()
        } else {
          $(element).hide()
        }
      })
    })




    // Аккордеон
    var acc = document.querySelectorAll(".askedquestions__button");
		var i;

		for (i = 0; i < acc.length; i++) {
		acc[i].addEventListener("click", function() {
			var panel = this.nextElementSibling;
			

			if (this.classList.contains('active_acc')) {
				panel.style.maxHeight = panel.scrollHeight + "px";

				this.classList.remove("active_acc");
				panel.style.maxHeight = null;
			} else {
				for (j=0; j<acc.length; j++) {
					acc[j].classList.remove("active_acc")
					acc[j].nextElementSibling.style.maxHeight = null;
				  }
				this.classList.add("active_acc");
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
			
			
		});
		}



    // Переключение инпутов

    $('.entity_row').hide();
    $('#individual').on('click', function(){
      $('.entity_row').hide();
      $('.individual_row').show();
    });
    $('#entity').on('click', function(){
      $('.entity_row').show();
      $('.individual_row').hide();
    });
});