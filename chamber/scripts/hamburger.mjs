const headerNav = document.querySelector('.navigation');
const hamButton = document.querySelector('#menu');

// Toggle the navigation menu when the hamburger button is clicked
export function setupHamButton() {
    hamButton.addEventListener('click', (event) => {
        event.preventDefault();
        console.log('menu click before', headerNav.className, hamButton.className);
        headerNav.classList.toggle('show');
        hamButton.classList.toggle('show');
        console.log('menu click after', headerNav.className, hamButton.className);

        const isOpen = hamButton.classList.contains("show");
        // Changes the aria label for the hamButton
        hamButton.setAttribute(
            "aria-label",
            isOpen ? "Close navigation menu" : "Open navigation menu"
        );
    });
}