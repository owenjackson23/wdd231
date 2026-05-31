const url = 'data/members.json';

// Fetches data
export const getMemberData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

export const getHigherMembers = async () => {
    const data = getMemberData();
}