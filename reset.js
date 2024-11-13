window.parent.document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, UIScrollViewContentInsetAdjustmentNever, minimumscale=0.25, maximumscale=5, height=1024, user-scalable=yes, initial-scale=1, viewport-fit=cover");

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
