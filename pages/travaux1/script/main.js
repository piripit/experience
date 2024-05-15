var typed = new Typed("#textDefile", {
  strings: ["FIATUWO", "Moriel", "Developpeur Front-End Junior"],
  loop: 1,
  backSpeed: 100,
  startDelay: 100,
  typeSpeed: 50,
});

function openModal(modalId) {
  document.getElementById(modalId).style.display = "block";
}

function closeModal() {
  document.getElementById("skills-modal").style.display = "none";
  document.getElementById("about-modal").style.display = "none";
  document.getElementById("cvModal").style.display = "none";
  document.getElementById("projects-modal").style.display = "none";
}

document
  .getElementById("about-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    openModal("about-modal");
  });

document
  .getElementById("skills-link")
  .addEventListener("click", function (event) {
    event.preventDefault();
    openModal("skills-modal");
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
document.getElementById("cvDownloadBtn").addEventListener("click", function () {
  document.getElementById("cvModal").style.display = "block";
});

const projectsData = [
  {
    title: "Portfolio",
    description: "Création d'un portfolio statique.",
    imageUrl: "img/Moi.jpg",
    githubUrl: "https://github.com/piripit/Portfolio",
  },
];

function loadProjects() {
  const projectsContainer = document.getElementById("projects-container");

  projectsContainer.innerHTML = "";

  projectsData.forEach((project) => {
    const projectElement = document.createElement("div");
    projectElement.classList.add("project");
    projectElement.innerHTML = `
      <h3>${project.title}</h3>
      <img src="${project.imageUrl}" alt="${project.title}">
      <p>${project.description}</p>
      <div class="project-links">
        <a href="${project.githubUrl}" target="_blank">GitHub</a>
      </div>
      <hr>
    `;
    projectsContainer.appendChild(projectElement);
  });
}

document
  .querySelector(".menu li:nth-child(4) a")
  .addEventListener("click", function (event) {
    event.preventDefault();
    openModal("projects-modal");
    loadProjects();
  });

function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(name) {
  var nameEQ = name + "=";
  var cookies = document.cookie.split(";");
  for (var i = 0; i < cookies.length; i++) {
    var cookie = cookies[i];
    while (cookie.charAt(0) === " ") {
      cookie = cookie.substring(1, cookie.length);
    }
    if (cookie.indexOf(nameEQ) === 0) {
      return cookie.substring(nameEQ.length, cookie.length);
    }
  }
  return null;
}

// Fonction pour vérifier et incrémenter le compteur de visites
function checkVisits() {
  var visits = getCookie("visits");
  if (visits) {
    visits = parseInt(visits) + 1;
  } else {
    visits = 1;
  }
  setCookie("visits", visits, 30); // Cookie expire après 30 jours

  // Mettre à jour le texte affichant le nombre de visites
  document.getElementById("visitsCount").textContent = visits;
}

// Appeler la fonction au chargement de la page
checkVisits();
