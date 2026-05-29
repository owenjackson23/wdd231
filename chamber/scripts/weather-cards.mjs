import { getWeatherData, getForecastData } from "./weather.mjs";

const currentWeather = document.getElementById('current-weather');
const weatherForecast = document.getElementById('forecast');

const displayCurrent = (weatherData) => {
    const srcIcon = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const timezoneOffset = -25200;
    const sunriseNum = weatherData.sys.sunrise;
    const sunsetNum = weatherData.sys.sunset;

    const sunriseDate = new Date(sunriseNum * 1000);
    const sunsetDate = new Date(sunsetNum * 1000);

    // Create elements for the currentWeather card
    let h2 = document.createElement('h2');
    let figure = document.createElement('figure');
    let weatherIcon = document.createElement('img');
    let weatherDesc = document.createElement('figcaption');
    let currentTemp = document.createElement('p');
    let highTemp = document.createElement('p');
    let lowTemp = document.createElement('p');
    let humidity = document.createElement('p');
    let sunrise = document.createElement('p');
    let sunset = document.createElement('p');

    // Set attributes and content
    h2.innerHTML = "Current Weather";
    weatherIcon.setAttribute('src', srcIcon);
    weatherIcon.setAttribute('alt', `${weatherData.weather[0].description} icon`);
    weatherIcon.setAttribute('loading', 'lazy');
    weatherDesc.innerHTML = weatherData.weather[0].description;
    currentTemp.innerHTML = `<strong>${weatherData.main.temp}</strong>&degF`;
    highTemp.innerHTML = `High: ${weatherData.main.temp_max}&degF`;
    lowTemp.innerHTML = `Low: ${weatherData.main.temp_min}&degF`;
    humidity.innerHTML = `Humidity: ${weatherData.main.humidity}%`;
    sunrise.innerHTML = `Sunrise: ${sunriseDate.toLocaleTimeString('en-US', {
        timeZone: 'America/Phoenix',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}`;
    sunset.innerHTML = `Sunset: ${sunsetDate.toLocaleTimeString('en-US', {
        timeZone: 'America/Phoenix',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    })}`;

    // Append img and figcaption to figure
    figure.appendChild(weatherIcon);
    figure.appendChild(weatherDesc);

    // Append elements to the currentWeather card
    currentWeather.appendChild(h2);
    currentWeather.appendChild(figure);
    currentWeather.appendChild(currentTemp);
    currentWeather.appendChild(highTemp);
    currentWeather.appendChild(lowTemp);
    currentWeather.appendChild(humidity);
    currentWeather.appendChild(sunrise);
    currentWeather.appendChild(sunset);
}

const displayForecast = (forecasts) => {
    // Build card and heading
    let h2 = document.createElement('h2');
    h2.innerHTML = "Weather Forecast";
    weatherForecast.appendChild(h2);

    // Add each daily forecast to the card
    forecasts.forEach((forecast) => {
        let dailyForecast = document.createElement('p');
        dailyForecast.innerHTML = `${forecast.weekday}: <strong>${forecast.temp}&degF</strong>`;
        weatherForecast.appendChild(dailyForecast);
    });
}

const formatForecast = (forecastData) => {
    return forecastData.map((day, index) => ({
        weekday: index === 0
            ? "Today"
            : index === 1
                ? "Tomorrow"
                : new Date(day.dt * 1000).toLocaleDateString('en-US', {
                    timeZone: 'America/Phoenix',
                    weekday: 'long'
                }),
        temp: day.main.temp
    }));
}

// Gets the member data and displays the cards
export async function displayWeatherCards() {
    const weatherData = await getWeatherData();
    const forecastData = await getForecastData();

    const forecasts = formatForecast(forecastData);

    displayCurrent(weatherData);
    displayForecast(forecasts);
}