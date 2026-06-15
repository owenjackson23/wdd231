const year = document.getElementById('currentYear');
const lastMod = document.getElementById('lastModified');

const msToDays = 86400000;
const today = new Date();

export function displayDates() {
    year.innerHTML = today.getFullYear();
    lastMod.innerHTML = document.lastModified;
}

// Returns the number of days since the last page visit
export function getDaysSinceVisit() {
    let message = ``;

    // Retrieve last visited date
    const visited = localStorage.getItem("lastVisit");

    // If the page has never been visited,
    //      displays welcome message
    if (!visited) {
        message = `Welcome! Let us know if you have any questions.`;
        localStorage.setItem("lastVisit", new Date().toISOString());
    }


    else {
        const lastVisit = new Date(visited);
        console.log(lastVisit);
        const now = new Date();

        // Compare current date to last visit
        const diffMs = now - lastVisit;
        const diffDays = Math.floor(diffMs / msToDays);
        console.log(diffDays);

        // If the page was visited less than a day ago,
        //      "Back so soon?" message is displayed
        if (diffDays < 1) {
            message = `Back so soon! Awesome!`;
        }

        // Display number of days passed
        else if (diffDays === 1) {
            message = `You last visited ${diffDays} day ago.`;
        }
        else {
            message = `You last visited ${diffDays} days ago.`;
        }
    }
    return message;
}