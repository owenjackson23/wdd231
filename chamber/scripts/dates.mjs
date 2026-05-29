const year = document.getElementById('currentYear');
const lastMod = document.getElementById('lastModified');

const today = new Date();

export function displayDates() {
    year.innerHTML = today.getFullYear();
    lastMod.innerHTML = document.lastModified;
}