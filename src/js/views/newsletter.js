import successIcon from "../../../assets/images/icon-success.svg";

class newsletterView {
  _dismissButton = document.querySelector("#dismiss-button");
  _newsletterForm = document.querySelector(".newsletter__form");
  _signUpContainer = document.querySelector(".newsletter");
  _successContainer = document.querySelector(".success");
  _input = document.querySelector("#newsletter-input");
  _email = "";

  initiateSubmitListener() {
    this._newsletterForm.addEventListener("submit", (e) => {
      console.log("FIRES");
      e.preventDefault();

      const emailInput = this._input.value;
      this._verifyEmailFormat(emailInput);

      if (!this._email) return;

      this._renderSuccessMessage();
    });
  }

  initiateDismissListener() {
    this._successContainer.addEventListener("click", (e) => {
      e.target.id == "dismiss-button" && this._toggleDisplay();
      this._email = "";
    });
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
    else {
      this._hideError();
      this._email = string;
    }
  }

  _renderSuccessMessage() {
    const html = `
    <img src="${successIcon}" alt="Success Icon" />
        <h1>Thanks for subscribing!</h1>
        <p>
          A confirmation email has been sent to
          <span>${this._email}</span>. Please open it and click the button
          inside to confirm your subscription.
        </p>
        <button id="dismiss-button">Dismiss message</button>
    `;

    this._input.value = "";
    this._successContainer.innerHTML = "";
    this._successContainer.insertAdjacentHTML("afterbegin", html);

    this._toggleDisplay();
  }
}

export default new newsletterView();
