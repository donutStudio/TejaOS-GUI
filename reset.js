document.addEventListener('keydown', function(event) {
    if (event.key === 'p' || event.key === 'P') {
        event.preventDefault();
        window.location.href = 'index.html';
    }
});