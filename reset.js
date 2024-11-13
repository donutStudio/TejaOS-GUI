document.addEventListener('keydown', function(event) {
    // Check if the focused element is a text input, textarea, or any editable field
    if ((event.key === 'p' || event.key === '') && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName)) {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});
