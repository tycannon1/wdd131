/* DATE AND TIME / COPYRRIGHT */
const currentYear = new Date().getFullYear();
  
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
  
const lastModifiedDate = document.lastModified;
  
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;

/* Hamburger Menu */

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamButton.classList.toggle('open');
    document.querySelector('.close-icon').classList.toggle('show');
});
