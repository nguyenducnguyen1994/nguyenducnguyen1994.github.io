$(document).ready(function() {
 $('#carousel-header-banner').owlCarousel({
  lazyLoad:true,
  loop:true,
  autoplay:true,
  autoplayTimeout:3000,
  autoplayHoverPause:true,
  // animateOut: 'fadeOutRight',
  // animateIn: 'flipInX',
  items:1,
  smartSpeed:450,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:1
    },
    1000:{
      items:1
    }
    
  }
});

 $('#carousel-featured-album').owlCarousel({
  loop:true,
  margin:30,
  nav:true, 
  navText: ["<img src='images/prev.png'>","<img src='images/next.png'>"],
  dots:false,
  autoplay:true,
  autoplayTimeout:1000,
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:3
    },
    1000:{
      items:4
    }
  }
})

 $('#carousel-advisory-corner').owlCarousel({
  loop:true,
  margin:30,
  dots:false,
  nav:false,
  autoplay:true,
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3
    }
  }
})


 $('#carousel-customer-comments').owlCarousel({
  loop:true,
  margin:30,
  dots:false,
  nav:false,
  autoplay:true,
  autoplayHoverPause:true,
  responsive:{
    0:{
      items:1
    },
    600:{
      items:2
    },
    1000:{
      items:3
    }
  }
})








});