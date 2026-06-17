export const planets = [
    {
        "name": "",
        "padawan": "",
        "knight": "",
        "master": ""
    },
    {
        "name": "",
        "padawan": "",
        "knight": "",
        "master": ""
    }
];

const url = "https://swapi.info/api/planets";

// Fetches data
export const getPlanetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}