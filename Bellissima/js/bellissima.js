$('.sec3__slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 2,
    speed:1500
  });
      
// Initialising the Rolly js library
  const r = rolly({
    view: document.querySelector('.app'),
    native: true,
    // other options
  });
  r.init();

// Initialising the AOS.js library
AOS.init({
    duration: 1500 //global duration
});