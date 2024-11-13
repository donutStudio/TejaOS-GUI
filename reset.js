window.parent.document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, UIScrollViewContentInsetAdjustmentNever, minimumscale=0.25, maximumscale=5, height=1024, user-scalable=yes, initial-scale=1, viewport-fit=cover");

if (window.navigator && window.navigator.standalone) {
    // Attempt to hide the status bar on iOS devices
    if (typeof window.screen !== 'undefined') {
        document.documentElement.style.marginTop = '0'; // Ensure no space remains after hiding
        document.body.style.marginTop = '0';
        document.body.style.paddingTop = '0';
        window.scrollTo(0, 1); // Scroll to hide the status bar area
    }
}

// Alternatively, for iOS WebView or standalone mode (when app is launched as PWA):
if (window.matchMedia('(display-mode: standalone)').matches) {
    // Hide the status bar by adding the following CSS:
    document.documentElement.style.setProperty('padding-top', '0px');
}

document.addEventListener('keydown', function(event) {
    // Check if the focused element is a text input, textarea, or any editable field
    if ((event.key === 'p' || event.key === '') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});
