import { setupHamButton } from './hamburger.mjs';
import { displayDates, getDaysSinceVisit } from './dates.mjs';
import { displayDiscoverCards } from './discover-cards.mjs';
import pointsOfInterest from "../data/discover-data.mjs";

const message = document.getElementById('message');

setupHamButton();
displayDates();
displayDiscoverCards(pointsOfInterest);
message.innerHTML = getDaysSinceVisit();