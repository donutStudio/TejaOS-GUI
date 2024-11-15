function openApp(appURL, fallbackURL) {
    // This is a basic check to see if the device is mobile
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Try to open the app using a custom URL scheme (specific to the app, e.g., Brawl Stars, YouTube, etc.)
        
        // Try to open the app
        var start = new Date().getTime();
        
        // Set a timeout to redirect to the fallback URL if the app is not found
        setTimeout(function() {
            // If the app didn't open in 1.5 seconds, assume it isn't installed
            if (new Date().getTime() - start < 1500) {
                window.location.href = fallbackURL;
            }
        }, 1000);
        
        // Attempt to open the app
        window.location.href = appURL;
    } else {
        // If it's not a mobile device, just redirect to a web page with more info or an alternative.
        window.location.href = fallbackURL;
    }
}

function openBrawlStars() {
    openApp("brawlstars://", "brawlStars.html");
}

function openYouTube() {
    openApp("youtube://", "youTube.html");
}

function openSpotify() {
    openApp("spotify://", "spotify.html");
}

function openCamera() {
    window.location.href = "camera.html";
}

function openMessages() {
    window.location.href = "messages.html";
}

function openSettings() {
    window.location.href = "settings.html";
}

function openCalculator() {
    window.location.href = "calculator.html";
}
