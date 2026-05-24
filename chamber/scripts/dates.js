const year = document.getElementById('currentYear');
const lastMod = document.getElementById('lastModified');

const today = new Date();

year.innerHTML = today.getFullYear();
lastMod.innerHTML = document.lastModified;