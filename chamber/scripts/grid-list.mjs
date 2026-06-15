const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const grid = document.querySelector('.grid');


export function setupGridListButtons() {
    // Change the class list when button is clicked
    gridButton.addEventListener('click', () => {
        grid.classList.add('grid');
        grid.classList.remove('list');

        gridButton.classList.add('current');
        listButton.classList.remove('current');
        // console.log(grid.classList);
    });

    listButton.addEventListener('click', () => {
        grid.classList.add('list');
        grid.classList.remove('grid');

        gridButton.classList.remove('current');
        listButton.classList.add('current');
        // console.log(grid.classList);
    });
}