"use strict";

//selecting elements

const paragraph = document.querySelector(".paragraph");
const inputField = document.getElementById("personName");
const greeting = document.getElementById("greeting");
const button = document.getElementById("button-check");

// Function: To show name
const showName = function () {
  const name = inputField.value.trim();

  if (name) {
    //hide paragraph
    paragraph.classList.add("hidden");

    //displaying message
    greeting.textContent = `Hello ${name}`.toUpperCase();

    //settimeout
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
};

//Adding eventListener to our button
button.addEventListener("click", showName);
