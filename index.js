function randomDice() {
  desimal = Math.random();
  random_dadu = Math.floor(desimal * 6);
  return random_dadu
}

dadu1 = document.querySelector(".dice>.img1");
dadu2 = document.querySelector(".dice>.img2");

list_dadu = [
  "./images/dice1.png",
  "./images/dice2.png",
  "./images/dice3.png",
  "./images/dice4.png",
  "./images/dice5.png",
  "./images/dice6.png",
];

function ChangeDice1(){
  dadu1.src = list_dadu[randomDice()];
}

function ChangeDice2(){
  dadu2.src = list_dadu[randomDice()];
}

function refreshMe(){
  angkaDadu1 = randomDice();
  angkaDadu2 = randomDice();
  if (angkaDadu1 > angkaDadu2) {
    document.querySelector(".container > h1").innerHTML = "Player 1 Wins!!!";
  } else if (angkaDadu2 > angkaDadu1) {
    document.querySelector(".container > h1").innerHTML = "Player 2 Wins!!!";
  } else {
    document.querySelector(".container > h1").innerHTML = "Tie!!!";
  }
  dadu1.src = list_dadu[angkaDadu1];
  dadu2.src = list_dadu[angkaDadu2];