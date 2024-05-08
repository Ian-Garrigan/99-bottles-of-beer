$(document).ready(function(){ 
  let songContainer = $("#beer-lyrics");
  let songLyrics = "";

  for (i = 99 ; i > 0 ; i--) {
    let currentBottles = i
    let newBottleCount = currentBottles - 1;
    let currentBottleWord = currentBottles != 1 ? "bottles" : "bottle";
    let nextBottleWord = newBottleCount != 1 ? "bottles" : "bottle";

    songLyrics += `${currentBottles} ${currentBottleWord} of beer on the wall,<br>`;
    songLyrics += `${currentBottles} ${currentBottleWord} of beer,<br>`;
    songLyrics += `Take 1 down, pass it around,<br>`;

    if (newBottleCount != 0) {
      songLyrics += `${newBottleCount} ${nextBottleWord} of beer on the wall.<br><br>`;
    } else {
      songLyrics += `<br>No more bottles of beer on the wall,<br> no more bottles of beer!<br>`;
      songLyrics += `Go to the store and buy some more,<br> 99 BOTTLES OF BEER ON THE WALL!!`;
    }
  }

  songContainer.html(songLyrics);
});

// display bottles image using for loop
document.addEventListener('DOMContentLoaded', function(){ 
  let bottleContainer = document.querySelector(".beer-bottle-container");

  for (let i = 0; i < 285; i++) {
    let newBottle = document.createElement("img");

    newBottle.src = "images/beer-bottle.png";
    newBottle.style.opacity = '0';

    bottleContainer.appendChild(newBottle);
    setTimeout(function() {
      newBottle.style.opacity = '1';
    }, 100);
  }
});

var typed = new Typed('#title', {
  strings: ["99 Bottles of Beer"],
  typeSpeed: 70,
  showCursor: true
});

const jumpToBottom = document.querySelector(".nav-to-bottom");

const goToBottom = () => {
  document.getElementById('hidden-div').scrollIntoView();
};

jumpToBottom.addEventListener("click", goToBottom)

const showOnPx = 5700;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden")
  } else {
    backToTopButton.classList.add("hidden")
  }
})

const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop)