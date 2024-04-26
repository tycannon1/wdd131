//JS//
const currentYear = new Date().getFullYear();
  
document.getElementById("copyright").innerHTML = `&copy; ${currentYear} Ty Cannon, USA`;
  
const lastModifiedDate = document.lastModified;
  
document.getElementById("lastModified").textContent = `Last modified: ${lastModifiedDate}`;