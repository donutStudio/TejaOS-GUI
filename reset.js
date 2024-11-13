// Disable pinch zoom
document.addEventListener('touchstart', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
});

document.addEventListener('touchmove', function(e) {
    if (e.touches.length > 1) {
        e.preventDefault();
    }
});

// Optional: Also disable double tap zoom
let lastTouchTime = 0;
document.addEventListener('touchend', function(e) {
    const currentTime = new Date().getTime();
    if (currentTime - lastTouchTime < 300) {
        e.preventDefault(); // Prevent zoom on double-tap
    }
    lastTouchTime = currentTime;
});

//window.parent//.document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, UIScrollViewContentInsetAdjustmentNever, minimumscale=0.25, maximumscale=5, height=1024, user-scalable=yes, initial-scale=1, viewport-fit=cover");

document.addEventListener('keydown', function(event) {
    // Check if the focused element is a text input, textarea, or any editable field
    if ((event.key === 'p' || event.key === '') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});
