import pointsOfInterest from "../data/discover-data.mjs";

const cards = document.querySelector('.cards');

// Creates and displays the member cards
const displayPOI = (pointsOfInterest) => {
    pointsOfInterest.forEach((poi) => {
        // Create elements for the card
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('figure');
        let photo = document.createElement('img');
        let caption = document.createElement('figcaption');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMore = document.createElement('button');

        // Set attributes and content
        name.innerHTML = poi.name;
        photo.setAttribute('src', poi.photo);
        photo.setAttribute('alt', `${poi.name} Photo`);
        photo.setAttribute('loading', 'lazy');
        photo.setAttribute('width', '300');
        photo.setAttribute('height', 'auto');
        caption.innerHTML = `Photo Credit: <a href="${poi.creditLink}">${poi.photoCredit}</a>`;
        address.innerHTML = `${poi.address1}<br>${poi.address2}`;
        description.innerHTML = `${poi.description}`;
        learnMore.setAttribute('type', 'button');
        learnMore.setAttribute('value', "Learn More!");

        //Append elements to figure
        figure.appendChild(photo);
        figure.appendChild(caption);

        // Append elements to the card
        card.appendChild(name);
        card.appendChild(figure);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(learnMore);

        card.classList.add('card');

        // Append the card to the cards container
        cards.appendChild(card);
    });
}

// Fetches data
const getPointsOfInterest = async () => {
    const response = await pointsOfInterest;
    const data = await response.json();
    return data;
}

// Gets the point of interest data and displays the cards
export async function displayDiscoverCards() {
    const data = await getPointsOfInterest();
    displayPOI(data);
}