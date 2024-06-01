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
fetch('data/thrift.json')
        .then(response => response.json())
        .then(data => {
            displayMembers(data);
        })
        .catch(error => console.error('Error fetching member data:', error));

    function displayMembers(members) {
        members.forEach(member => {
            const memberCard = document.createElement('div');
            memberCard.classList.add('card');
            memberCard.innerHTML = `
            <img src="images/${member.image}" alt="${member.name}">
            <div>
                <h2>${member.name}</h2>
                <p>${member.price}</p>
                <p>${member.color}</p>
                <p>${member.size}</p>
             
            </div>
            `;
            directory.appendChild(memberCard);
        });
    }