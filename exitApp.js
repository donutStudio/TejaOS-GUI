// Detect swipe up in the bottom 100px of the screen
function handleSwipeUp(event) {
  const threshold = 100; // Bottom 100px of the screen
  const touchStartY = event.touches[0].clientY;

  window.addEventListener('touchmove', (event) => {
    const touchEndY = event.touches[0].clientY;

    // Check if swipe is upwards within the bottom 100px of the screen
    if (touchStartY - touchEndY > threshold && touchStartY > window.innerHeight - threshold) {
      // Store the scroll position info in localStorage (to scroll to the bottom)
      localStorage.setItem('scrollPosition', JSON.stringify({ x: 0, y: document.body.scrollHeight }));

      // Redirect to lock_screen.html
      window.location.href = 'lock_screen.html';
    }
  });
}

// Attach event listener to detect swipe start
document.addEventListener('touchstart', handleSwipeUp);
