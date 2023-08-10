var adviceNumber = document.querySelector("#number");
var quote = document.querySelector("p.qoute");
var dice = document.querySelector("#dice");
var smileImage = document.querySelector(".smile-image");

dice.addEventListener("click", getQuote);

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getQuote() {
  fetch("https://icanhazdadjoke.com/", {
    headers: {
      Accept: "application/json",
    },
  })
    .then(data => data.json())
    .then(obj => {
      adviceNumber.innerText = random(1, 100);
      quote.innerHTML = "<q> " + obj.joke + " </q>";
      smileImage.style.display = "block";
      dice.style.animation = "rotate 1s linear";
      dice.style.animationFillMode = "forwards";

      setTimeout(() => {
        dice.style.animation = "";
      }, 1000);
    });
}
