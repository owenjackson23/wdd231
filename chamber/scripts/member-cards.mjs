import { getMemberData, getSpecialMembers } from "./member-data.mjs";

const cards = document.querySelector('.cards');

// Creates and displays the member cards
const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements for the card
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('address');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let visitWebsite = document.createElement('button');
        let level = document.createElement('p');
        let logo = document.createElement('img');

        // Set attributes and content
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', 'auto');
        name.innerHTML = member.name;
        address.innerHTML = `${member.address1}<br>${member.address2}`;
        phone.innerHTML = member.phone;
        phone.classList.add('phone');
        website.setAttribute('href', member.website);
        visitWebsite.setAttribute('type', 'button')
        visitWebsite.innerHTML = `Visit Website`;

        if (member.level >= 3) {
            level.innerHTML = "Membership: Gold";
        }
        else if (member.level === 2) {
            level.innerHTML = "Membership: Silver";
        }
        else {
            level.innerHTML = "Membership: Member";
        }

        // Append button to anchor tag
        website.appendChild(visitWebsite);

        // Append elements to the card
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(website);

        card.classList.add('card');

        // Append the card to the cards container
        cards.appendChild(card);
    });
}

// Gets the member data and displays the cards
export async function displayMemberCards() {
    const data = await getMemberData();
    displayMembers(data.members);
}

// Gets the special members data and displays the cards
export async function displaySpotlights() {
    const specialMembers = await getSpecialMembers();
    displayMembers(specialMembers);
}