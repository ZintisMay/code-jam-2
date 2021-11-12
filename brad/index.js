"use strict";

const randoWords = ["white", "black", "grey", "green", "brown"];

const bigContainer = document.getElementById("input-container");

const randoGen = () => Math.trunc(Math.random());

document.querySelector(".input").addEventListener("click", function () {
  let wordContainer = document.createElement("div");
  wordContainer.setAttribute("class", "word-container");

  const rando = document.createElement('h1');
  rando.innerHTML = ``;
  wordContainer.append(rando);


  const response = document.createElement('h1');
  response.innerHTML = ``;
  wordContainer.append(response);

  bigContainer.append(wordContainer);
});
