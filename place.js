// Function to fetch weather data and update the weather box
function fetchWeather() {
    // Assuming you have a weather API endpoint for Lisbon
    const weatherApiUrl = '"https://api.open-meteo.com/v1/forecast?latitude=38.7167&longitude=-9.1333&hourly=temperature_2m&temperature_unit=fahrenheit"';
    
    // Fetch weather data from the API
    fetch(weatherApiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherBox = document.getElementById('weather');
            // Assuming the API response contains weather information
            weatherBox.textContent = `${data.temperature}°C, ${data.description}`;
        })
        .catch(error => {
            console.error('Error fetching weather:', error);
            // In case of error, display a message
            const weatherBox = document.getElementById('weather');
            weatherBox.textContent = 'Weather data unavailable';
        });
}

// Call the fetchWeather function when the page loads
window.onload = fetchWeather;