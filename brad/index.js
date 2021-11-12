"use strict";

const randoWords = [
  "white",
  "black",
  "grey",
  "green",
  "brown",
  "red",
  "purple",
  "yellow",
  "orange",
  "blue",
  "maroon",
  "mauve",
  "aqua",
  "gold",
  "silver",
];
const wordsInPlay = [];

const wordContainer = document.getElementById("wordContainer");
const btnInput = document.getElementById("btn-input");
let interval = null;

btnInput.addEventListener("keyup", function (e) {
  e.preventDefault();
  if (e.key === "Enter") {
  checkForAndRemoveWord(e.target.value);
  }
});


startGame();

function checkForAndRemoveWord(playerWord) {
  let refreshWordList = false;

  for (var x = 0; x < wordsInPlay.length; x++) {
    let word = wordsInPlay[x];
    if (playerWord == word) {
      refreshWordList = true;
      wordsInPlay.splice(x, 1);
      x--;
      btnInput.value = "";
    }
  }
  if (refreshWordList) {
    displayWords();
  }
}

function displayWords() {
  wordContainer.innerHTML = "";
  for (let word of wordsInPlay) {
    displaySingleWord(word);
  }
}

function displaySingleWord(word) {
  let h1 = document.createElement("h1");
  h1.innerHTML = word;
  wordContainer.appendChild(h1);
}

function startGame() {
  interval = setInterval(function () {
    wordsInPlay.push(pickRandomWord());
    displayWords();
  }, 1000);
}

function pickRandomWord() {
  return randoWords[randoGen(randoWords.length)];
}

const randoGen = (hi) => Math.trunc(Math.random() * hi);
