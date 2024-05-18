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

const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
        templeName: "Denver Colorado",
        location: "Denver, Colorado",
        dedicated: "1986, October, 24",
        area: 29117,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/800x500/denver-temple-lds-766966-wallpaper.jpg"
      },
      {
        templeName: "Helsinki Finland",
        location: "Helsinki, Finland",
        dedicated: "2006, October, 22",
        area: 16350,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/800x450/helsinki-finland-temple-lds-354498-wallpaper.jpg"
      },
      {
        templeName: "Laie Hawaii",
        location: "Laie, Hawaii",
        dedicated: "1919, November, 27",
        area: 47224,
        imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/laie-hawaii/800x500/laie-temple-772762-wallpaper.jpg"
      },
      
    // Add more temple objects here...
  ];
 // Function to generate temple cards based on criteria
function generateFilteredTempleCards(criteria) {
    const main = document.querySelector('main');
    main.innerHTML = ''; // Clear previous temple cards

    let filteredTemples = [];

    switch (criteria) {
        case 'Old':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) < 1900);
            break;
        case 'New':
            filteredTemples = temples.filter(temple => parseInt(temple.dedicated.split(',')[0]) > 2000);
            break;
        case 'Large':
            filteredTemples = temples.filter(temple => temple.area > 90000);
            break;
        case 'Small':
            filteredTemples = temples.filter(temple => temple.area < 10000);
            break;
        default:
            filteredTemples = temples;
    }

    filteredTemples.forEach((temple) => {
        // Create figure element for the temple card
        const figure = document.createElement('figure');

        // Create image element for the temple image
        const image = document.createElement('img');
        image.src = temple.imageUrl; // Set image source
        image.alt = temple.templeName; // Set alt attribute
        image.loading = 'lazy'; // Set native lazy loading

        // Create figcaption element for temple details
        const figcaption = document.createElement('figcaption');
        figcaption.innerHTML = `
            <h3>${temple.templeName}</h3>
            <p><strong>Location:</strong> ${temple.location}</p>
            <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
            <p><strong>Area:</strong> ${temple.area} sq ft</p>
        `;

        // Append image and figcaption to the figure element
        figure.appendChild(image);
        figure.appendChild(figcaption);

        // Append the figure element to the main section of the document
        main.appendChild(figure);
    });

    console.log('Filtering temples based on criteria:', criteria);
}

// Event listener for navigation menu items
document.querySelectorAll('.navigation a').forEach(item => {
    console.log('Adding event listener to:', item.textContent.trim());
    item.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent default behavior
        const criteria = item.textContent.trim();
        generateFilteredTempleCards(criteria);
    });
});
document.querySelector('.navigation a').addEventListener('click', function() {
    console.log('Navigation link clicked!');
});

// Call the function to generate temple cards
generateFilteredTempleCards('All'); // Display all temples initially