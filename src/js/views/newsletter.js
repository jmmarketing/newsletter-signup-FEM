class newsletterView {
  _dismissButton = document.querySelector("#dismiss-button");
  _newsletterForm = document.querySelector(".newsletter__form");
  _signUpContainer = document.querySelector(".newsletter");
  _successContainer = document.querySelector(".success");
  _input = document.querySelector("#newsletter-input");

  constructor() {
    this._newsletterForm.addEventListener("submit", (e) => {
      console.log("FIRES");
      e.preventDefault();

      const emailInput = this._input.value;
      //   this._toggleDisplay();
      this._verifyEmailFormat(emailInput);
    });

    this._dismissButton.addEventListener(
      "click",
      this._toggleDisplay.bind(this)
    );
  }

  _toggleDisplay() {
    this._signUpContainer.classList.toggle("hide");
    this._successContainer.classList.toggle("hide");
  }

  _showError() {
    this._newsletterForm.dataset.error = true;
  }

  _hideError() {
    delete this._newsletterForm.dataset.error;
  }

  _verifyEmailFormat(string) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isValid = regex.test(string);

    if (!isValid) this._showError();
    else this._hideError();
  }
}

export default new newsletterView();
