import { displayDates } from './dates.mjs';
import { setupHamButton } from './hamburger.mjs';
import { fillDestinationSelect, saveBooking } from './booking-form.mjs';
import { modalHandling } from './modal.mjs';

displayDates();
setupHamButton();

modalHandling();

fillDestinationSelect();
saveBooking();