
function calculateWindChill(temperature, windSpeed) {

    if (temperature <= 10 && windSpeed > 4.8) {

        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill * 100) / 100; 
    } else if (temperature <= 50 && windSpeed > 3) {
   
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16);
        return Math.round(windChill * 100) / 100; 
    } else {
        return null; 
    }
}


function displayWindChill() {
  
    const temperature = 5; 
    const windSpeed = 10; 


    const windChill = calculateWindChill(temperature, windSpeed);

    const weatherBox = document.getElementById('weather');
    if (windChill !== null) {
        weatherBox.textContent = `Temperature: ${temperature}°C, Wind Speed: ${windSpeed} km/h, Wind Chill: ${windChill}°C`;
    } else {
        weatherBox.textContent = 'Wind chill factor cannot be calculated with the provided data.';
    }
}


window.onload = displayWindChill;