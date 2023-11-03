jQuery('.category-slider').slick({
  autoplay: false,
  autoplaySpeed: 1500,
  arrow: true,
  dots: false,
  infinite: true,
  speed: 1500,
  prevArrow: '<svg class="category-arrow-prev" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="34" r="34" transform="matrix(-1 0 0 1 68 0)" fill="#214850"/><path d="M21.4697 34.5303C21.1768 34.2374 21.1768 33.7626 21.4697 33.4697L26.2426 28.6967C26.5355 28.4038 27.0104 28.4038 27.3033 28.6967C27.5962 28.9896 27.5962 29.4645 27.3033 29.7574L23.0607 34L27.3033 38.2426C27.5962 38.5355 27.5962 39.0104 27.3033 39.3033C27.0104 39.5962 26.5355 39.5962 26.2426 39.3033L21.4697 34.5303ZM46 34.75H22V33.25H46V34.75Z" fill="white"/></svg>',
  nextArrow: '<svg class="category-arrow-next" width="68" height="68" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="34" cy="34" r="34" fill="#214850"/><path d="M46.5303 34.5303C46.8232 34.2374 46.8232 33.7626 46.5303 33.4697L41.7574 28.6967C41.4645 28.4038 40.9896 28.4038 40.6967 28.6967C40.4038 28.9896 40.4038 29.4645 40.6967 29.7574L44.9393 34L40.6967 38.2426C40.4038 38.5355 40.4038 39.0104 40.6967 39.3033C40.9896 39.5962 41.4645 39.5962 41.7574 39.3033L46.5303 34.5303ZM22 34.75H46V33.25H22V34.75Z" fill="white"/></svg>',
  slidesToShow: 6,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

jQuery('.testimonials-slider').slick({
  autoplay: false,
  autoplaySpeed: 1500,
  arrow: true,
  dots: false,
  infinite: true,
  speed: 1500,
  prevArrow: '<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" transform="matrix(-1 0 0 1 70 0)" fill="white"/><path d="M21.2929 35.7071C20.9024 35.3166 20.9024 34.6834 21.2929 34.2929L27.6569 27.9289C28.0474 27.5384 28.6805 27.5384 29.0711 27.9289C29.4616 28.3195 29.4616 28.9526 29.0711 29.3431L23.4142 35L29.0711 40.6569C29.4616 41.0474 29.4616 41.6805 29.0711 42.0711C28.6805 42.4616 28.0474 42.4616 27.6569 42.0711L21.2929 35.7071ZM49 36L22 36L22 34L49 34L49 36Z" fill="#8E7555"/></svg>',
  nextArrow: '<svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="35" cy="35" r="35" fill="white"/><path d="M48.7071 35.7071C49.0976 35.3166 49.0976 34.6834 48.7071 34.2929L42.3431 27.9289C41.9526 27.5384 41.3195 27.5384 40.9289 27.9289C40.5384 28.3195 40.5384 28.9526 40.9289 29.3431L46.5858 35L40.9289 40.6569C40.5384 41.0474 40.5384 41.6805 40.9289 42.0711C41.3195 42.4616 41.9526 42.4616 42.3431 42.0711L48.7071 35.7071ZM21 36L48 36L48 34L21 34L21 36Z" fill="#8E7555"/></svg>',
  slidesToShow: 3,
   centerMode: true,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});