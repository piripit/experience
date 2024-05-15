const dropdowns = Array.from(document.querySelectorAll(".dropdown-btn"));

dropdowns.map((dropdown) => {
  dropdown.addEventListener("click", function () {
    dropdowns.forEach((btn) => {
      if (btn !== dropdown) {
        btn.classList.remove("active");
        const dropdownContainer = btn.nextElementSibling;
        dropdownContainer.style.display = "none";
      }
    });

    dropdown.classList.toggle("active");

    const dropdownContainer = dropdown.nextElementSibling;
    dropdownContainer.style.display =
      dropdownContainer.style.display === "none" ? "block" : "none";
  });
});

window.addEventListener("click", function (event) {
  if (!event.target.matches(".dropdown-btn")) {
    dropdowns.forEach((btn) => {
      btn.classList.remove("active");
      const dropdownContainer = btn.nextElementSibling;
      dropdownContainer.style.display = "none";
    });
  }
});
