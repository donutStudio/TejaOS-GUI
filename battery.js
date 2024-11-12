// battery.js
function updateBatteryStatus(battery) {
    const batteryDiv = document.getElementById('battery');
    const batteryBar = document.getElementById('battery-bar');
    const batteryFill = document.createElement('div');
    batteryFill.className = 'battery-fill';

    batteryBar.appendChild(batteryFill); // Add the fill element inside the bar

    // Update the battery bar width
    function updateBatteryLevel() {
        const batteryLevel = Math.floor(battery.level * 100);
        batteryFill.style.width = `${batteryLevel}%`;
        document.getElementById('battery-percentage').innerText = `${batteryLevel}%`;

        // Change color based on battery level
        if (batteryLevel <= 10) {
            batteryFill.style.backgroundColor = 'rgb(255, 255, 255)';
        } else if (batteryLevel <= 20) {
            batteryFill.style.backgroundColor = 'rgb(255, 255, 255)';
        } else {
            batteryFill.style.backgroundColor = 'rgb(255, 255, 255)';
        }
    }

    // Set the initial battery level
    updateBatteryLevel();

    // Update battery level when it changes
    battery.addEventListener('levelchange', updateBatteryLevel);

    // Optionally add charging status
    battery.addEventListener('chargingchange', () => {
        if (battery.charging) {
            batteryFill.style.backgroundColor = 'blue'; // Charging color
        } else {
            updateBatteryLevel(); // Revert back to battery level color
        }
    });
}

// Check for the Battery Status API
if ('getBattery' in navigator) {
    navigator.getBattery().then(updateBatteryStatus);
} else {
    console.log("Battery Status API is not supported on this browser.");
}
