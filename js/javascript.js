// get the password and confirm password input fields
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirm-password");
const errorMessage = document.getElementsByTagName("span")[1];
const formRowElement = document.querySelector(".form-row.password-style.error");
const submitButton = document.querySelector("input[type='submit']");

// add event listener to the confirm password field
confirmPasswordInput.addEventListener("input", () => {
  // get the values of both password fields
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;

  if (passwordValue !== confirmPasswordValue) {
    console.log("* Password don't match");
    formRowElement.classList.remove("success");
    formRowElement.classList.add("error");
    errorMessage.innerText = "* Passwords do not match";
    submitButton.disabled = true;
  }
  if (passwordValue == confirmPasswordValue) {
    console.log("Passwords match");
    formRowElement.classList.remove("error");
    formRowElement.classList.add("success");
    errorMessage.innerText = "";
    submitButton.disabled = false;
  }
});
