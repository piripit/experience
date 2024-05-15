document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("linkedin").addEventListener("click", function () {
    window.open(
      "https://www.linkedin.com/in/y-moriel-fiatuwo-51544a225/",
      "_blank"
    );
  });
  document.getElementById("email").addEventListener("click", function () {
    window.open("mailto:fmoriel01@gmail.com", "_blank");
  });
  document.getElementById("telephone").addEventListener("click", function () {
    window.open("tel:0766282506");
  });
});

const contactHeading = document.getElementById("contact-heading");
const contactInfo = document.querySelector(".contact-info");

contactHeading.addEventListener("click", () => {
  contactInfo.classList.toggle("show");
  contactInfo.classList.toggle("hide");
});
const realizationHeading = document.getElementById("realizationHeading");
const realizations = document.querySelector(".realizations");

realizationHeading.addEventListener("click", () => {
  realizations.classList.toggle("show");
  realizations.classList.toggle("hide");
});
const skillsHeading = document.getElementById("skillsHeading");
const skills = document.querySelector(".skills");

skillsHeading.addEventListener("click", () => {
  skills.classList.toggle("show");
  skills.classList.toggle("hide");
});
const aboutMeHeading = document.getElementById('aboutMeHeading');
const aboutMe = document.querySelector('.about-me');

aboutMeHeading.addEventListener('click', () => {
  aboutMe.classList.toggle('show');
  aboutMe.classList.toggle('hide');
});
