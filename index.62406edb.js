const dismissButton = document.querySelector("#dismiss-button");
const newsletterForm = document.querySelector(".newsletter__form");
const signUpContainer = document.querySelector(".newsletter");
const successContainer = document.querySelector(".success");
newsletterForm.addEventListener("submit", function(e) {
    console.log("FIRES");
    e.preventDefault();
    toggleDisplay();
});
dismissButton.addEventListener("click", toggleDisplay);
function toggleDisplay() {
    signUpContainer.classList.toggle("hide");
    successContainer.classList.toggle("hide");
}

//# sourceMappingURL=index.62406edb.js.map
