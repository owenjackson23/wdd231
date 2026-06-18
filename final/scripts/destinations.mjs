import { displayDates } from './dates.mjs';
import { setupHamButton } from './hamburger.mjs';
// import { displayDestinations } from './destination-cards.mjs';

// Temporary import
import { fullDestinations } from './destination-data.mjs';

displayDates();
setupHamButton();

fullDestinations().then(data => {
    console.log(data);
});

// displayDestinations();