export const url = 'data/members.json';
export const cards = document.getElementById('cards');

// Fetches data
export async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

// Displays the member cards
export const displayMembers = (members) => {
    members.forEach((member) => {
        // Create elements for the card
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address1 = document.createElement('p');
        let address2 = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let logo = document.createElement('img');

        // Set attributes and content
        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', 'auto');
        name.innerHTML = member.name;
        address1.innerHTML = member.address1;
        address1.classList.add('address');
        address2.innerHTML = member.address2;
        address2.classList.add('address');
        phone.innerHTML = member.phone;
        phone.classList.add('phone');
        website.setAttribute('href', member.website);
        website.innerHTML = `Visit Website`;

        if (member.level >= 3) {
            level.innerHTML = "Membership: Gold";
        }
        else if (member.level === 2) {
            level.innerHTML = "Membership: Silver";
        }
        else {
            level.innerHTML = "Membership: Member";
        }

        // Append elements to the card
        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(website);

        card.classList.add('card');

        // Append the card to the cards container
        cards.appendChild(card);
    });
}