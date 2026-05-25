const gridButton = document.getElementById('grid');
const listButton = document.getElementById('list');
const grid = document.querySelector('.grid');

// Change the class list when button is clicked
gridButton.addEventListener('click', () => {
    grid.classList.add('grid');
    grid.classList.remove('list');
    // console.log(grid.classList);
});

listButton.addEventListener('click', () => {
    grid.classList.add('list');
    grid.classList.remove('grid');
    // console.log(grid.classList);
})