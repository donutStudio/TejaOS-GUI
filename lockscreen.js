let touchStartY = 0;
let touchEndY = 0;
let lockScreen = document.getElementById('lock_screen');
let homeScreen = document.getElementById('home_screen');
let navbar = document.getElementById('navbar'); // Assuming your navbar has the ID 'navbar'

let isLocked = true; // Lock state, determines whether we are on the lock screen or home screen

// Initial state of the navbar - hidden by default
navbar.style.display = 'none';

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
        // Swiped Down
        navigateToLockScreen();
    }
}

function preventScroll() {
    window.scrollTo(0, document.body.scrollHeight); // Locks to bottom of the page
}

// Function to navigate to the Home Screen
function navigateToHomeScreen() {
    smoothScrollTo(homeScreen, 300);
    //window.addEventListener("scroll", preventScroll);
}

// Function to navigate to the Lock Screen
function navigateToLockScreen() {
    //window.removeEventListener("scroll", preventScroll);
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
function toggleNavbarOnScroll() {
    const homeScreenPosition = homeScreen.getBoundingClientRect().top;

    if (homeScreenPosition <= 100) {
        // Show navbar when home screen is in view
        navbar.style.display = 'block';
    }
}

// Event listener to check scroll position
window.addEventListener("scroll", toggleNavbarOnScroll);

// Double-tap detection
let lastTapTime = 0;

document.addEventListener('touchend', function (event) {
    const currentTime = new Date().getTime();
    const timeDifference = currentTime - lastTapTime;

    if (timeDifference < 500 && timeDifference > 0) {
        // Double tap detected
        navbar.style.display = 'block'; // Show navbar
    }

    lastTapTime = currentTime;
});
