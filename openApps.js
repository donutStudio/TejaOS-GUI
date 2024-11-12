function openBrawlStars() {
    // This is a fallback URL if the app is not found (could be an internal page or an external one)
    var fallbackURL = "index.html"; 
    
    // This is a basic check to see if the device is mobile
    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
        // Try to open the app using a custom URL scheme (specific to Brawl Stars, if available)
        var appURL = "brawlstars://"; // Replace this with the correct custom URL scheme for the app
        
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
