export const planets = [
    {
        "name": "Tatooine",
        "activity": "Cheer for your favorite racer at the Mos Espa Podrace.",
        "image": "images/canyon-dune-turn.webp"
    },
    {
        "name": "Alderaan",
        "activity": "Enjoy breathtaking views as you hike through the beautiful terrain.",
        "image": "images/aldera-city.webp"
    },
    {
        "name": "Yavin IV",
        "activity": "Explore the secret rebel base built into the ruins of ancient Sith temples.",
        "image": "images/yavin-4.webp"
    },
    {
        "name": "Hoth",
        "activity": "There is always fresh powder on Hoth's ski slopes.",
        "image": "images/biomes-hoth.webp"
    },
    {
        "name": "Dagobah",
        "activity": "Enjoy the sounds of nature and see unique creatures as you camp in Dagobah's infamous swamps.",
        "image": "images/gnarltree.webp"
    },
    {
        "name": "Bespin",
        "activity": "Take a cloud car for a joyride around Cloud City.",
        "image": "images/cloud-city.webp"
    },
    {
        "name": "Endor",
        "activity": "Race through the dense forest on Imperial speeder bikes.",
        "image": "images/endor.webp"
    },
    {
        "name": "Naboo",
        "activity": "Enjoy fine dining and stunning views as you relax in Theed Palace.",
        "image": "images/lake-country.webp"
    },
    {
        "name": "Coruscant",
        "activity": "This city world is the perfect place for a shopping spree.",
        "image": "images/coruscant.webp"
    },
    {
        "name": "Kamino",
        "activity": "Surf gigantic waves as you encounter familiar faces.",
        "image": "images/kaminoan-rider.webp"
    },
    {
        "name": "Geonosis",
        "activity": "Explore massive underground catacombs. Our guides have committed every junction to memory.",
        "image": "images/geonosis.webp"
    },
    {
        "name": "Mustafar",
        "activity": "Get up close and personal with some of the galaxy's largest active volcanoes.",
        "image": "images/lava-rivers.webp"
    },
    {
        "name": "Kashyyyk",
        "activity": "Get a nice tan on the beach or get a legendary view from Kashyyyk's treetops.",
        "image": "images/kashyyyk-staging-area.webp"
    },
    {
        "name": "Ryloth",
        "activity": "Ride through canyons and across desert on a blurrg mount.",
        "image": "images/ryloth.webp"
    },
    {
        "name": "Umbara",
        "activity": "This planet has a night life like no other... Just don't pet any of the bioluminescent flora or fauna.",
        "image": "images/umbaran-hover-tanks.webp"
    }
];

const url = "https://swapi.info/api/planets";

// Fetches data
const getPlanetData = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        // console.log(data);
        return data;
    } catch (error) {
        console.log(`Failed to obtain planetary data.`);
        return;
    }
}

// Combines planets array and api data into one array
function mergePlanets(localPlanets, apiPlanets) {
    // Return local planet array if api fails
    if (!apiPlanets) return localPlanets;

    // convert api data to an array
    const apiArray = apiPlanets.results || apiPlanets;

    const apiMap = Object.fromEntries(
        apiArray.map(planet => [planet.name.toLowerCase(), planet])
    );

    // merge arrays, matching them using "name" as the key
    return localPlanets.map(local => ({
        // const match = apiArray.find(api => api.name.toLowerCase() === local.name.toLowerCase());

        ...local,
        ...(apiMap[local.name.toLowerCase()] || {})
    }));
}

export const fullDestinations = async () => {
    const apiData = await getPlanetData();
    return mergePlanets(planets, apiData);
};