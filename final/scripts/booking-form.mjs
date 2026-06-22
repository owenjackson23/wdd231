import { getPlanetNames } from "./destination-data.mjs";

const bookForm = document.getElementById("book-form");
const destinationSelect = document.getElementById("destination-select");


let destination = localStorage.getItem("destination");
// let package = localStorage.getItem("package");
// let arrivalDate = localStorage.getItem("arrival");
// let departureDate = localStorage.getItem("departure");

// Adds planets to select
export function fillDestinationSelect() {
    getPlanetNames().forEach(planet => {
        const option = document.createElement("option");

        option.value = planet;
        option.innerHTML = planet;

        destinationSelect.appendChild(option);
    });
}

export function saveBooking() {
    // if (!destination) {
    //     destination = "No bookings found";
    // }

    // Saves booking to localStorage
    bookForm.addEventListener("submit", () => {
        const selectedDestination = destinationSelect.value;

        localStorage.setItem("destination", selectedDestination);
        destination = localStorage.getItem("destination");
    });
    console.log(destination);
}