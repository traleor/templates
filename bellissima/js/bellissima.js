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