"use strict";

//Selecting elements
const paragraph = document.querySelector(".paragraph");
const inputField = document.getElementById("personName");
const greeting = document.getElementById("greeting");
const button = document.getElementById("button-check");

//Adding eventListener to our button
button.addEventListener("click", function () {
  const name = inputField.value.trim();

  if (name) {
    //Hide paragraph
    paragraph.classList.add("hidden");

    greeting.textContent = `Hello ${name}`.toUpperCase();

    setTimeout(() => {
      greeting.textContent = "";
      paragraph.classList.remove("hidden");
      inputField.value = "";
    }, 3000);
  } else {
    greeting.textContent = "Please enter your name!";

    setTimeout(() => {
      greeting.textContent = "";
    }, 2000);
  }
});
