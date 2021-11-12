const words = "The mineral content of rocks in Jezero Crater, which was once the site of a lake 3.7 billion years ago, act like an undisturbed ancient time capsule. They can tell scientists how the rocks formed and what the climate was like at the time. This could provide a big picture look at what the lake and its river delta were like when the planet was warmer and wetter and potentially habitable.It sounds like Perseverance is gearing up to collect a sample from the abraded rock to see what Martian secrets South Séítah may reveal."

const wordList = words.split(" ")

const rando = () => Math.trunc(Math.random());

const cardContainer = document.getElementById("card-body");

document.querySelector('.card-body').addEventListener('click', function(){
  let containerCard = document.createElement("div");
  containerGen.setAttribute("class", "uniform"); 

  const random = document.createElement("h1");
  random.innerHTML = `${wordList[(rando() * wordList.length)]}`;
  console.log(random);
  containerCard.append(random);
  
  const input = document.createElement("h1");
  input.innerHTML = '';
  containerCard.append(input);


   cardContainer.append(containerCard);
})

