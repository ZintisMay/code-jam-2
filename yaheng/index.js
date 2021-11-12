const words =
  "The mineral content of rocks in Jezero Crater, which was once the site of a lake 3.7 billion years ago, act like an undisturbed ancient time capsule. They can tell scientists how the rocks formed and what the climate was like at the time. This could provide a big picture look at what the lake and its river delta were like when the planet was warmer and wetter and potentially habitable.It sounds like Perseverance is gearing up to collect a sample from the abraded rock to see what Martian secrets South Séítah may reveal.";

const wordList = words.split(" ");

let interval = null;
let countdown = 30;

const rando = (hi) => Math.trunc(Math.random() * hi);
// const pickRandomWord = () => wordList[rando(wordList.length)]

const cardContainer = document.getElementById("card-body");
const userInput = document.getElementById("userInput");
const startButton = document.getElementById("startButton");

document.querySelector(".card-body").addEventListener("click", appendCard);
userInput.addEventListener("keyup", userKeyPress);

startGame();

function appendCard() {
  let containerCard = document.createElement("div");
  // containerGen.setAttribute("class", "uniform");

  const h1 = document.createElement("h1");
  h1.innerHTML = `${wordList[rando(wordList.length)]}`;
  console.log(h1);
  containerCard.append(h1);

  // const input = document.createElement("h1");
  // input.innerHTML = "";
  // containerCard.append(input);

  cardContainer.append(containerCard);
}

function userKeyPress(event) {
  let keyCode = event.code || event.key;
  if (keyCode == "Enter") {
    let userWord = event.target.value;
    console.log(userWord);
    userSubmitsWord(userWord);
  }
}

function startGame() {
  interval = setInterval(function () {
    appendCard();
    startButton.innerHTML = countdown;
    countdown--;
    if (countdown < 0) {
      clearInterval(interval);
      alert("game over! you win!");
    }
    let wordsOnPage = document.getElementsByTagName("h1");
    if (wordsOnPage.length > 10) {
      clearInterval(interval);
      alert("game over! you lose!");
    }
  }, 1000);
}

function userSubmitsWord(word) {
  let wordsOnPage = document.getElementsByTagName("h1");
  for (let el of wordsOnPage) {
    if (el.innerHTML == word) {
      console.log("MATCH", word);
      el.remove();
      userInput.value = "";
    }
  }
}
