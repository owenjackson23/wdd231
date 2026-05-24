const url = 'data/members.json';
const cards = document.getElementById('cards');

async function getMemberData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.members);
    displayMembers(data.members);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address1 = document.createElement('p');
        let address2 = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let logo = document.createElement('img');

        logo.setAttribute('src', member.logo);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '150');
        logo.setAttribute('height', 'auto');
        name.innerHTML = member.name;
        address1.innerHTML = member.address1;
        address2.innerHTML = member.address2;
        phone.innerHTML = member.phone;
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


        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address1);
        card.appendChild(address2);
        card.appendChild(phone);
        card.appendChild(level);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getMemberData();