import { displayDates } from './dates.mjs';
import { setupHamButton } from './hamburger.mjs';

displayDates();
setupHamButton();

const vacation = document.getElementById('vacation');

let destination = localStorage.getItem("destination");

if (!destination) {
    vacation.innerHTML = `BOOKING NOT FOUND`
}
else {
    localStorage.setItem("destination", destination);
    vacation.innerHTML = destination;
}