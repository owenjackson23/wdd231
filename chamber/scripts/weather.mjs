const apiKey = "cb6cc7884060c2bc3c34d3866f980a3f";
const lat = "33.416779726995514";
const long = "-111.8302921858426";

const urlCurrent = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`;
const urlForecast = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${long}&units=imperial&appid=${apiKey}`

// Get the current weather data
export async function getWeatherData() {
    try {
        const response = await fetch(urlCurrent);
        if (response.ok) {
            const weatherData = await response.json();
            // console.log(weatherData);
            return weatherData;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Get the forecast data
export async function getForecastData() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const forecastData = await response.json();

            // Filter the list to only include 2pm times
            const dailyForecast = forecastData.list.filter(forecast => {
                const date = new Date(forecast.dt * 1000);
                const hour = new Intl.DateTimeFormat('en-US', {
                    timeZone: 'America/Phoenix',
                    hour: 'numeric',
                    hour12: false
                }).format(date);

                return hour === '14';
            });
            // Keep only the first 3 days
            const threeDays = dailyForecast.slice(0, 3);

            return threeDays;
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}