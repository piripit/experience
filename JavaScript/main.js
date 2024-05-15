/*type animation */
var typed = new Typed(".typing", {
  strings: ["", "FIATUWO", "Moriel", "Developpeur Front-End Junior"],
  loop: true,
  backSpeed: 60,
  typeSpeed: 100,
});
/*aside */

const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li"),
  totalNavList = navList.length,
  allSection = document.querySelectorAll(".section"),
  totalSection = allSection.length;
for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    for (let i = 0; i < totalSection; i++) {
      allSection[i].classList.remove("back-section");
    }
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        allSection[j].classList.add("back-section");
      }
      navList[j].querySelector("a").classList.remove("active");
    }
    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.remove("active");
  }
  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});
function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSection; i++) {
    allSection[i].classList.toggle("open");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  const currentPage = location.pathname; // Récupérer le chemin de la page actuelle
  const navLinks = document.querySelectorAll(".nav a"); // Sélectionner tous les liens de menu
  // Parcourir tous les liens de menu
  navLinks.forEach((link) => {
    // Vérifier si le lien correspond à la page actuelle
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active"); // Ajouter la classe active au lien de menu correspondant
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const linkedinBtn = document.getElementById("linkedin-btn");

  linkedinBtn.addEventListener("click", function () {
    window.open(
      "https://www.linkedin.com/in/y-moriel-fiatuwo-51544a225/",
      "_blank"
    );
  });
});
// Vérifier la largeur de l'écran au chargement de la page
window.addEventListener("load", function () {
  ajusterAffichage();
});

// Vérifier la largeur de l'écran lors du redimensionnement
window.addEventListener("resize", function () {
  ajusterAffichage();
});

// Fonction pour ajuster l'affichage du tableau en fonction de la largeur de l'écran
function ajusterAffichage() {
  if (window.innerWidth <= 450) {
    document.getElementById("tableau").style.display = "none";
    document.getElementById("boutonVoirTableau").style.display = "block";
  } else {
    document.getElementById("tableau").style.display = "block";
    document.getElementById("boutonVoirTableau").style.display = "none";
  }
}
// Masquer le tableau lorsque le bouton est cliqué
document
  .getElementById("boutonVoirTableau")
  .addEventListener("click", function () {
    document.getElementById("tableau").style.display = "none";
  });
function ouvrirPage(url) {
  window.location.href = url; // Rediriger vers l'URL spécifique
}
