"use strict";

const img = document.getElementById("dog-img");

const newDog = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      img.innerHTML = `<img src='${data.message}'>`;
    });
};
