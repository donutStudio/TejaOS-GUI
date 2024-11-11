// Check if the Battery API is supported by the browser
if (navigator.getBattery) {
    navigator.getBattery().then(function(battery) {
        // Function to update the battery icon
        function updateBatteryLevel() {
            var batteryLevel = battery.level * 100; // Battery level is a float between 0 and 1
            document.getElementById('battery-level').style.width = batteryLevel + '%';

            // Optionally, change color depending on battery level
            if (batteryLevel <= 20) {
                document.getElementById('battery-level').style.backgroundColor = 'red';
            } else if (batteryLevel <= 50) {
                document.getElementById('battery-level').style.backgroundColor = 'orange';
            } else {
                document.getElementById('battery-level').style.backgroundColor = '#4caf50';
            }
        }

        // Update the battery level when the battery status changes
        battery.addEventListener('levelchange', updateBatteryLevel);

        // Initial update
        updateBatteryLevel();
    });
} else {
    console.log("Battery API not supported in this browser.");
}
