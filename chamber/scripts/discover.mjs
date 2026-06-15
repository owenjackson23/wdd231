import { setupHamButton } from './hamburger.mjs';
import { displayDates } from './dates.mjs';
import { displayDiscoverCards } from './discover-cards.mjs';
import pointsOfInterest from "../data/discover-data.mjs";

setupHamButton();
displayDates();
displayDiscoverCards(pointsOfInterest);