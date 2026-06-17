export const planets = [
    {
        "name": "Tatooine",
        "number": 0,
        "activity": "Cheer for your favorite racer at the Mos Espa Podrace.",
        "image": ""
    },
    {
        "name": "Alderaan",
        "number": 1,
        "activity": "Enjoy breathtaking views as you hike through the beautiful terrain.",
        "image": ""
    },
    {
        "name": "Yavin IV",
        "number": 2,
        "activity": "Explore the secret rebel base built into the ruins of ancient Sith temples.",
        "image": ""
    },
    {
        "name": "Hoth",
        "number": 3,
        "activity": "There is always fresh powder on Hoth's ski slopes.",
        "image": ""
    },
    {
        "name": "Dagobah",
        "number": 4,
        "activity": "Enjoy the sounds of nature and see unique creatures as you camp in Dagobah's infamous swamps.",
        "image": ""
    },
    {
        "name": "Bespin",
        "number": 5,
        "activity": "Take a cloud car for a joyride around Cloud City.",
        "image": ""
    },
    {
        "name": "Endor",
        "number": 6,
        "activity": "Race through the dense forest on Imperial speeder bikes.",
        "image": ""
    },
    {
        "name": "Naboo",
        "number": 7,
        "activity": "Enjoy fine dining and stunning views as you relax in Theed Palace.",
        "image": ""
    },
    {
        "name": "Coruscant",
        "number": 8,
        "activity": "This city world is the perfect place for a shopping spree.",
        "image": ""
    },
    {
        "name": "Kamino",
        "number": 9,
        "activity": "Surf gigantic waves as you encounter familiar faces.",
        "image": ""
    },
    {
        "name": "Geonosis",
        "number": 10,
        "activity": "Explore massive underground catacombs. Our guides have committed every junction to memory.",
        "image": ""
    },
    {
        "name": "Mustafar",
        "number": 12,
        "activity": "Get up close and personal with some of the galaxy's largest active volcanoes.",
        "image": ""
    },
    {
        "name": "Kashyyyk",
        "number": 13,
        "activity": "Get a nice tan on the beach or get a legendary view from Kashyyyk's treetops.",
        "image": ""
    }
    // {
    //     "name": "Corellia",
    //     "number": 21,
    //     "activity": "",
    //     "image": ""
    // },
    // {
    //     "name": "Ryloth",
    //     "number": 36,
    //     "activity": "",
    //     "image": ""
    // },
    // {
    //     "name": "Concord Dawn",
    //     "number": 52,
    //     "activity": "",
    //     "image": ""
    // },
    // {
    //     "name": "Umbara",
    //     "number": 59,
    //     "activity": "",
    //     "image": ""
    // }
];

const url = "https://swapi.info/api/planets";

// Fetches data
export const getPlanetData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;
}