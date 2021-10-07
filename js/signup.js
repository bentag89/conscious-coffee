const form = document.querySelector("#form");
const fullName = document.querySelector("#fullName");
const email = document.querySelector("#email");
const address = document.querySelector("#address");
const nameError = document.querySelector("#nameError");
const emailError = document.querySelector("#emailError");
const addressError = document.querySelector("#addressError");
const button = document.querySelector("#submit");
const successMessage = document.querySelector("#message");

var nameErrorInForm = "";
var emailErrorInForm = "";
var addressErrorInForm = "";

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const patternMatches = regEx.test(email);
  return patternMatches;
}
function formValidation() {
  if (fullName.value.trim().length > 0) {
    nameError.style.display = "none";
    nameErrorInForm = false;
  } else {
    nameError.style.display = "block";
    nameErrorInForm = true;
  }
  if (validateEmail(email.value) === true) {
    emailError.style.display = "none";
    emailErrorInForm = false;
  } else {
    emailError.style.display = "block";
    emailErrorInForm = true;
  }

  if (address.value.trim().length >= 25) {
    addressError.style.display = "none";
    addressErrorInForm = false;
  } else {
    addressError.style.display = "block";
    addressErrorInForm = true;
  }
}

function submitForm(event) {
  event.preventDefault();
  formValidation();
  if (!addressErrorInForm && !emailErrorInForm && !nameErrorInForm) {
    successMessage.innerHTML = "<p class=success>Your account was successfully created!</p>";
    form.reset();
  } else if (addressErrorInForm || emailErrorInForm || nameErrorInForm) {
    successMessage.innerHTML = "";
  }
}

function error() {
  if (errorInForm === true) {
    formValidation;
  } else {
    submitForm;
  }
}

button.addEventListener("click", submitForm);