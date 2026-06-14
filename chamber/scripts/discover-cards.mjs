const cards = document.querySelector('.cards');

// Creates and displays the member cards
const displayPOI = (pointsOfInterest) => {
    pointsOfInterest.forEach((poi) => {
        // Create elements for the card
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let image = document.createElement('figure');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let learnMore = document.createElement('button');

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