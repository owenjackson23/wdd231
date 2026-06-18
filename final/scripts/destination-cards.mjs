import { fullDestinations } from './destination-data.mjs';

const cards = document.querySelector('.card-container');

// Builds the destination cards
const buildDestinations = (planets) => {
    planets.forEach((planet) => {
        // Create elements for the card
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('img');
        let activity = document.createElement('p');
        let climate = document.createElement('p');
        let terrain = document.createElement('p');
        let bookLink = document.createElement('a');
        let book = document.createElement('button');

        // Set attributes and content
        name.innerHTML = planet.name;
        image.setAttribute('src', planet.image);
        image.setAttribute('alt', `${planet.name} Image`);
        image.setAttribute('loading', 'lazy');
        image.setAttribute('width', '300');
        image.setAttribute('height', 'auto');
        activity.innerHTML = `${planet.activity}`;
        climate.innerHTML = `Climate: ${planet.climate}`;
        terrain.innerHTML = `Terrain: ${planet.terrain}`;
        bookLink.setAttribute('href', '#');
        book.setAttribute('type', 'button');
        book.innerHTML = `Book It!`;

        // Append button to anchor tag
        bookLink.appendChild(book);

        // Append elements to the card
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(activity);
        card.appendChild(climate);
        card.appendChild(terrain);
        card.appendChild(bookLink);

        card.classList.add('card');

        // Append the card to the cards container
        cards.appendChild(card);
    });
}

// Gets the destination data and displays the cards
export async function displayDestinations() {
    const planets = await fullDestinations();
    buildDestinations(planets);
}