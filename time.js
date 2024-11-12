function updateTime() {
    const now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    hours = hours < 10 ? '0' + hours : hours;
    if (hours > 12) {
        hours -= 12;
    }
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const timeString = `${hours}:${minutes}`;

    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString('en-US', options);

    // Update all elements with class 'time'
    const timeElements = document.querySelectorAll('.time');
    timeElements.forEach(element => {
        element.textContent = timeString;
    });

    // Update all elements with class 'date'
    const dateElements = document.querySelectorAll('.date');
    dateElements.forEach(element => {
        element.textContent = dateString;
    });
}

setInterval(updateTime, 1000);
updateTime();
