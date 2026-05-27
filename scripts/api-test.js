const currentTemp = document.getElementById('current-temp');
const weatherIcon = document.getElementById('weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = "cb6cc7884060c2bc3c34d3866f980a3f";
const lat = "49.74805760229872";
const long = "6.6350268862759085";

const url = `https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&units=imperial&appid=${apiKey}`;

// Get the current weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    currentTemp.innerHTML = `${data.main.temp}&degF`;

    const srcIcon = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    weatherIcon.setAttribute('src', srcIcon);
    weatherIcon.setAttribute('alt', `${data.weather[0].description} icon`);
    weatherIcon.setAttribute('loading', 'lazy');

    captionDesc.innerHTML = data.weather[0].description;
}

apiFetch();