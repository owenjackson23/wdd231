const url = 'data/members.json';

// Fetches data
export const getMemberData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Filters out standard members from the data
export const getSpecialMembers = async () => {
    const data = await getMemberData();
    let specialMembers = data.members.filter(member => member.level > 1);
    specialMembers = getRandomItems(specialMembers, 3);
    console.log(specialMembers);
    return specialMembers;
}

function getRandomItems(array, numItems) {
    const shuffled = [...array];

    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }

    return shuffled.slice(0, numItems);
}