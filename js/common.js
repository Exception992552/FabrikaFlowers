$(document).ready(function(){


var $container = $(".gallery-block");
  $container.imagesLoaded(function () {
    $container.masonry({
    itemSelector: ".item-masonry",
    columnWidth: ".item-masonry"
  });
    $(".item-masonry").imagefill();
});


$(".container-menu").mmenu({
     "extensions": ["position-right",
     "position-front",
     "fx-listitems-slide",
     "theme-white",
     "pagedim-black"]
});

  $(".close-menu").click(function() {
        $("#c-menu").data( "mmenu" ).close();
  });


$("a[href*='#'].link-menu").mPageScroll2id({
 scrollingEasing: "easeOutQuint"
});

$(".hamburger-block").on('click', function(event) {

    event.preventDefault();
    var ths = $(this);

  });

$(".close-menu").on('click', function(event) {

    event.preventDefault();
    var ths = $(this);
    $(".block-menu").removeClass('open-menu');
    // $(".hamburger-block").removeClass('active');
   

  });

  $(".link-button-choice").on('click', function(event) {
    event.preventDefault();
    var ths = $(this),
    container = ths.closest('.choice-block'),
    cont = container.siblings('.card-item '),
    img = cont.find('.image-card'),
    btn = ths.closest('.choice'),
    pth = ths.attr('href');

    img.fadeOut('300', function() {
       $(this).attr('src', pth).fadeIn('100');
        
    });

    btn.addClass('active_choice').siblings('.choice').removeClass('active_choice');

   //  container = ths.closest('.card-container'),
   //  content = container.find('.image-card'),
   //  ndx = ths.index();
   // ths.addClass('active_choice').siblings('.choice').removeClass('active_choice');
   // content.eq(ndx).addClass('active-img').siblings().removeClass('active-img');
    
  });

	$('.slider-exclusive').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    info:true,
    navText:false,
    animateOut: 'fadeOut'
	});

  $('.slider-services').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:1,
    info:true,
    navText:false,
    animateOut: 'fadeOut'
  });

$('.btn-prev').click(function(){
    $('.slider-services').trigger('next.owl.carousel');
    
});
$('.btn-bext').click(function(){
    $('.slider-services').trigger('prev.owl.carousel');
   
});
   
	$('.slider-exclusive').on('changed.owl.carousel', function(e) {
  if (!e.namespace || e.property.name != 'position') return
  $('#info').text(e.relatedTarget.relative(e.item.index) + 1 + '/' + e.item.count)
});

 $('.slider-advantages').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:3,
    info:true,
    navText:false,
    smartSpeed:1000,
    margin:40,
    responsiveClass:true,
    responsive:{
        1200: {
            items:3
        },
        768: {
           items:2
        }, 
        0:{
            items:1
        }
    }

  });

$('.button-prev-advatages').click(function(){
    $('.slider-advantages').trigger('next.owl.carousel');
    
});
$('.button-next-advatages').click(function(){
    $('.slider-advantages').trigger('prev.owl.carousel');
   
});
 $('.goods-card-1').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:1,
    info:true,
    navText:false,
    slideBy:2,
    animateOut: 'fadeOut'
  });

  $('.goods-card-1').on('changed.owl.carousel', function(e) {
    var ths = $(this),
    q = ths.siblings('.block-order-element'),
    m = q.find('.block-quantity-management'),
    number = m.find('.number'),
    quantity = number.siblings('.quantity');
  if (!e.namespace || e.property.name != 'position') return
   number.text(e.relatedTarget.relative(e.item.index) + 1);
  quantity.text(e.item.count);
});
$('.button-enlarge-1').click(function(){
    $('.goods-card-1').trigger('next.owl.carousel'); 
});
$('.button-decrease-1').click(function(){
    $('.goods-card-1').trigger('prev.owl.carousel');
});
$('.goods-card-2').owlCarousel({
    loop:true,
    nav:false,
    dots:false,
    items:1,
    info:true,
    navText:false,
    animateOut: 'fadeOut'
  });
  $('.goods-card-2').on('changed.owl.carousel', function(e) {
    var ths = $(this),
    q = ths.siblings('.block-order-element'),
    m = q.find('.block-quantity-management'),
    number = m.find('.number'),
    quantity = number.siblings('.quantity');
  if (!e.namespace || e.property.name != 'position') return
   number.text(e.relatedTarget.relative(e.item.index) + 1);
  quantity.text(e.item.count);
});
$('.button-enlarge-2').click(function(){
    $('.goods-card-2').trigger('next.owl.carousel');  
});
$('.button-decrease-2').click(function(){
    $('.goods-card-2').trigger('prev.owl.carousel');  
});

$('.gallery-block').magnificPopup({
    delegate: 'a',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    removalDelay: 300,
    mainClass: 'mfp-fade',
    closeBtnInside:false,
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    }
  });
$('.mfp-play').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  $('.link-form').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',
    mainClass: 'mfp-fade',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks:  {
      open: function() { 
      $('.mfp-close').text('Закрыть x');
    },
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });


    



});