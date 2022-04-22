$(document).ready(function(){
    $('.carusel__slide').slick({
      speed: 1200,
      // adaptiveHeight:false,
      prevArrow: '<button type="button" class="slick-prev"><img src="../icon/chevron_left.png"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="../icon/chevron_right.png"></button>'
    });

    $('ul.cacatalog__lists').on('click', 'li:not(.catalog__list__item_active)', function() {
      $(this)
        .addClass('catalog__list__item_active').siblings().removeClass('catalog__list__item_active')
        .closest('div.container').find('div.catalog__wreper').removeClass('catalog__wreper_active').eq($(this).index()).addClass('catalog__wreper_active');
    });

   

   

    function togggleSlide(item){
       $(item).each(function(i){
      $(this).on('click', function(e){
        e.preventDefault();
        $('.catalog-content__item').eq(i).toggleClass('catalog-content__item_active');
        $('.catalog-content__list').eq(i).toggleClass('catalog-content__list_active');
      });


    });
   }
togggleSlide('.select_content');
togggleSlide('.select_prev');

//poput window


$('[data-model=consultation]').on('click', function(){
$('.popup, #consultation').fadeIn('slow'); } );

$('.popup__close').on('click', function(){
$('.popup, #order, #consultation, #thenks').fadeOut('slow');
});

$('.button_mini').each(function(i){
  $(this).on('click', function(){
  $('.popup__order_subtitle').text($('.catalog-content__title').eq(i).text());
  $('.popup, #order').fadeIn('slow');
  });
});


  

function formValidation(form){
  $(form).validate({
    rules:{
    name: {required: true, minlength: 2},
    phone:{required:true},
    email: {required: true, email: true}
  },
  
    messages: {
      name: {
      required: "Поле не може бути пустим",
      minlength: "Поле має містити від {0} символів"
    },
    phone:{
      required: "Поле не може бути пустим"
    },
    email:{
      required: "Поле не може бути пустим",
      email: "Вкажіть Вашу адресу в форматі: name@domain.com"
     }
  
  
  }
  });
 

}

formValidation('#consultation-form');
formValidation('#consultation form');
formValidation('#order form');

$('input[name=phone]').mask("+3 (999) 999-9999");
});
