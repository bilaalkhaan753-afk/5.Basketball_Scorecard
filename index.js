let homeScore = document.getElementById("homescore");
let guestScore = document.getElementById("guestscore");
let newCount = 0;
let newcount = 0;

function addOne() {
  newCount += 1;
  homeScore.textContent = newCount;
}

function addTwo() {
  newCount += 2;
  homeScore.textContent = newCount;
}

function addThree() {
  newCount += 3;
  homeScore.textContent = newCount;
}

function addone() {
  newcount += 1;
  guestScore.textContent = newcount;
}

function addtwo() {
  newcount += 2;
  guestScore.textContent = newcount;
}

function addthree() {
  newcount += 3;
  guestScore.textContent = newcount;
}
