function setBatteryLevel(percentage) {
    const batteryLevel = document.getElementById("battery-level");
    batteryLevel.style.height = percentage + "%";
    
    if (percentage > 75) {
        batteryLevel.style.backgroundColor = "#4caf50"; // Green
    } else if (percentage > 50) {
        batteryLevel.style.backgroundColor = "#ffeb3b"; // Yellow
    } else if (percentage > 25) {
        batteryLevel.style.backgroundColor = "#ff9800"; // Orange
    } else {
        batteryLevel.style.backgroundColor = "#f44336"; // Red
    }
}

// Example: Set battery level to 70%
setBatteryLevel(70);
