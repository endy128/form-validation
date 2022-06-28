const form = document.getElementById("form");
const email = document.getElementById("email");
const country = document.getElementById("country");
const postcode = document.getElementById("postcode");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  validateInputs();
});

const inputs = Array.from(document.querySelectorAll("input"));
inputs.forEach((input) => input.addEventListener("change", (e) => {
  console.log(e.target.id);
  if (e.target.id === "email") validateEmail();
  if (e.target.id === "country") validateCountry();
  if (e.target.id === "postcode") validatePostcode();
  if (e.target.id === "password") validatePassword();
  if (e.target.id === "password2") validatePassword2();
}));

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");

  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

const isValidPostcode = (postcode) => {
  const re = /^(\d{5}((|-)-\d{4})?)|([A-Za-z]\d[A-Za-z][\s\.\-]?(| -)\d[A-Za-z]\d)|[A-Za-z]{1,2}\d{1,2}[A-Za-z]? \d[A-Za-z]{2}$/;
  return re.test(String(postcode).toUpperCase());
};

const validateEmail = () => {
  const emailValue = email.value.trim();

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Provide a valid email address");
  } else {
    setSuccess(email);
  }
};

const validateCountry = () => {
  const countryValue = country.value.trim();
  if (countryValue === "") {
    setError(country, "Country is required");
  } else {
    setSuccess(country);
  }
};

const validatePostcode = () => {
  const postcodeValue = postcode.value.trim();
  if (postcodeValue === "") {
    setError(postcode, "Postcode is required");
  } else if (!isValidPostcode(postcodeValue)) {
    setError(postcode, "Provide a valid postcode");
  } else {
    setSuccess(postcode);
  }
};

const validatePassword = () => {
  const passwordValue = password.value.trim();
  if (passwordValue === "") {
    setError(password, "Password is required");
  } else if (passwordValue.length < 8) {
    setError(password, "Password must be at least 8 character.");
  } else {
    setSuccess(password);
  }
};

const validatePassword2 = () => {
  const password2Value = password2.value.trim();
  if (password2Value === "") {
    setError(password2, "Please confirm your password");
  } else if (password2Value !== passwordValue) {
    setError(password2, "Passwords doesn't match");
  } else {
    setSuccess(password2);
  }
};

const validateInputs = () => {
  validateEmail();
  validateCountry();
  validatePostcode();
  validatePassword();
  validatePassword2();
};
