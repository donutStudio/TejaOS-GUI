let lastScrollTime = Date.now(); // Store the last time the user scrolled

// Add an event listener for scroll events
window.addEventListener('scroll', () => {
  lastScrollTime = Date.now(); // Update the last scroll time on any scroll
});

setInterval(() => {
  const currentTime = Date.now();
  
  // Check if inactive for 5 seconds (5000 milliseconds)
  if (currentTime - lastScrollTime > 0) {
    // Get the current scroll position and the total document height
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

    // Determine how far the user is from the top or bottom
    const distanceToTop = scrollPosition;
    const distanceToBottom = documentHeight - (scrollPosition + windowHeight);

    // Scroll to the closest edge (top or bottom)
    if (distanceToTop < distanceToBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top smoothly
    } else {
      window.scrollTo({ top: documentHeight - windowHeight, behavior: 'smooth' }); // Scroll to bottom smoothly
    }
  }
}, 10); // Check every second
