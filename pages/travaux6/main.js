const accordions = Array.from(document.querySelectorAll(".accordion"));

accordions.map((accordion) => {
  accordion.addEventListener("click", function () {
    const accordionContainer = this.nextElementSibling;
    if (accordionContainer.style.display === "none") {
      accordionContainer.style.display = "block";
    } else {
      accordionContainer.style.display = "none";
    }
  });
});
