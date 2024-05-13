const signUpForm = document.querySelector("#signup-form");
const massage = document.querySelector(".message");

signUpForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

const names = "a";

const regEx = /^[a-zA-Z0-9]{6,12}&/;

const result = regEx.test(names);

console.log(result);