window.parent//.document.querySelector("meta[name=viewport]").setAttribute("content", "width=device-width, UIScrollViewContentInsetAdjustmentNever, minimumscale=0.25, maximumscale=5, height=1024, user-scalable=yes, initial-scale=1, viewport-fit=cover");

document.addEventListener('keydown', function(event) {
    // Check if the focused element is a text input, textarea, or any editable field
    if ((event.key === 'p' || event.key === '') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});
