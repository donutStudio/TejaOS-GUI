// homescreen.js

let touchStartY = 0;
let touchEndY = 0;
let lockScreen = document.getElementById('lock_screen');
let homeScreen = document.getElementById('home_screen');

let isLocked = true; // Lock state, determines whether we are on the lock screen or home screen

// Function to handle touch start event
function handleTouchStart(event) {
    touchStartY = event.touches[0].clientY; // Get the starting touch position
}

// Function to handle touch end event
function handleTouchEnd(event) {
    touchEndY = event.changedTouches[0].clientY; // Get the ending touch position

    if (touchStartY - touchEndY > 50) {
        // Swiped Up
        navigateToHomeScreen();
    }
    if (touchEndY - touchStartY > 50) {
        // Swiped Up
        navigateToLockScreen();
    }
}

function preventScroll() {
    window.scrollTo(0, document.body.scrollHeight); // Locks to bottom of the page
}

// Function to navigate to the Home Screen
function navigateToHomeScreen() {
    smoothScrollTo(homeScreen, 300);
    window.addEventListener("scroll", preventScroll);
}

// Function to navigate to the Lock Screen
function navigateToLockScreen() {
    window.removeEventListener("scroll", preventScroll);
    smoothScrollTo(lockScreen, 300);
}

// Attach event listeners for touchstart and touchend
document.addEventListener('touchstart', handleTouchStart);
document.addEventListener('touchend', handleTouchEnd);

let isScrolling = false;

function smoothScrollTo(targetElement, duration) {
    if (isScrolling) return; // Prevents overlapping scrolls
    isScrolling = true;
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        const ease = progress * (2 - progress); // Ease-out effect
        window.scrollTo(0, startPosition + distance * ease);

        if (timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            isScrolling = false; // Reset the flag once animation is done
        }
    }

    requestAnimationFrame(animation);
}

window.history.scrollRestoration = "manual"; // Prevents automatic scroll position restoration

window.onload = function () {
    lockScreen.scrollIntoView({
        behavior: "auto",
        block: "start"
    });
};

const body = document.body;

// Function to check if the user is on the home screen
function toggleBlurOnScroll() {
    const homeScreenPosition = homeScreen.getBoundingClientRect().top;

    if (homeScreenPosition <= 0) {
        // Add blur to the background if the home screen is in view
        body.classList.add("blur-background");
    } else {
        // Remove blur when not on home screen
        body.classList.remove("blur-background");
    }
}

// Event listener to check scroll position
window.addEventListener("scroll", toggleBlurOnScroll);

