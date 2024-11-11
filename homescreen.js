let lastScrollTime = Date.now(); // Store the last time the user scrolled

window.addEventListener('scroll', () => {
  lastScrollTime = Date.now(); // Update the last scroll time on any scroll
});

setInterval(() => {
  const currentTime = Date.now();
  
  // Check if inactive for 5 seconds (5000 milliseconds)
  if (currentTime - lastScrollTime > 50) {
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
}, 50); // Check every second

// Variables to keep track of the current screen
let lockScreen = document.getElementById('lock_screen');
let homeScreen = document.getElementById('home_screen');

// Track the initial position of the touch
let startY = 0;
let endY = 0;
let isSwiping = false;

// Add event listener for touchstart to get the starting Y position of the touch
document.body.addEventListener('touchstart', function(e) {
    startY = e.touches[0].clientY;
    isSwiping = true;
});

// Add event listener for touchmove to track the vertical swipe
document.body.addEventListener('touchmove', function(e) {
    if (isSwiping) {
        endY = e.touches[0].clientY;
    }
});

// Add event listener for touchend to detect the swipe direction
document.body.addEventListener('touchend', function(e) {
    if (isSwiping) {
        let swipeDistance = startY - endY;

        // If the swipe distance is greater than 100px, consider it a valid swipe
        if (swipeDistance > 100) {
            // Transition to home screen
            lockScreen.style.display = 'none';  // Hide lock screen
            homeScreen.style.display = 'block';  // Show home screen
        }

        // Reset variables after swipe
        isSwiping = false;
        startY = 0;
        endY = 0;
    }
});
