let lastActiveTime = Date.now(); // Store the last time user interacted



window.addEventListener('mousemove', () => {

  lastActiveTime = Date.now(); // Update on any mouse movement

});



window.addEventListener('keydown', () => {

  lastActiveTime = Date.now(); // Update on any key press

});



setInterval(() => {

  const currentTime = Date.now();

  if (currentTime - lastActiveTime > 0) { // Check if inactive for 5 seconds

    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly

  }

}, 1000); // Check every second