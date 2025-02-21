const dismissButton = document.querySelector("#dismiss-button");
const newsletterForm = document.querySelector(".newsletter__form");

newsletterForm.addEventListener("submit", function (e) {
  console.log("FIRES");
  e.preventDefault();
  newsletterForm.dataset.error = true;
});
