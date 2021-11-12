const playerInput = document.getElementById("playerInput");
const wordArea = document.getElementById("wordArea");
var para = "Artificial intelligence, or AI, has enormous potential to change the way NASA’s spacecraft study the universe. But because all machine learning algorithms require training from humans, a recent project asks members of the public to label features of scientific interest in imagery taken by NASA’s Perseverance Mars rover."
const wordList = para.split(/[ ,]+/)
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

