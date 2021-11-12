const playerInput = document.getElementById("playerInput");
const wordArea = document.getElementById("wordArea");
const wordList = ["apple", "banana", "kiwi"];
let playerWord = "";

playerInput.addEventListener("keyup", function (event) {
  if (event.key === "Enter") {
    removeMatchingWord(event.target.value);
    displayWords();
  }
});

displayWords();

function removeMatchingWord(playerWord) {
  for (var x = 0; x < wordList.length; x++) {
    let word = wordList[x];
    if (playerWord == word) {
      wordList.splice(x, 1);
      x--;
      playerWord = "";
      playerInput.value = "";
    }
  }
}

function displayWords() {
  wordArea.innerHTML = "";
  for (let word of wordList) {
    displayWord(word);
  }
}

function displayWord(word) {
  let li = document.createElement("li");
  li.innerHTML = word;
  wordArea.appendChild(li);
}
