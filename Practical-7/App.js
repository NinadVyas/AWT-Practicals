const axios = require('axios');

const apiKey = 'a96e28f30ac5bedd41e5b1af740c2e01';

async function getWeather(city) {
    try {

        const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const response = await axios.get(url);
        const weatherData = response.data;

        const { name, main } = weatherData;
        const { temp, humidity } = main;

        console.log(`City: ${name}`);
        console.log(`Temperature: ${temp}°C`);
        console.log(`Humidity: ${humidity}%`);
    }
    catch (error) {
        console.error('Error Fetching Weather Data:', error.message);
    }
}

getWeather('Bhavnagar');
getWeather('Ahmedabad');
getWeather('Surat');
getWeather('Rajkot');
getWeather('Patan');