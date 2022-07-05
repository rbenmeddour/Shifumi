let scoreJoueur = document.getElementById("score-joueur");
let scoreIa = document.getElementById("score-ia");

const pierreClicked = () => {
  document.getElementById("playerChoice").src = "./img/pierre.png";
  playerChoice = "Pierre";
  iaTour();
};

const ciseauxClicked = () => {
  document.getElementById("playerChoice").src = "./img/ciseaux.png";
  playerChoice = "Ciseaux";
  iaTour();
};

const feuilleClicked = () => {
  document.getElementById("playerChoice").src = "./img/feuille.png";
  playerChoice = "Feuille";
  iaTour();
};

const iaTour = () => {
  let iaPlay = getRandomArbitrary();
  if (iaPlay === 1) {
    iaChoice = "Pierre";
    document.getElementById("iaChoice").src = "./img/pierre.png";
  }
  if (iaPlay === 2) {
    iaChoice = "Feuille";
    document.getElementById("iaChoice").src = "./img/feuille.png";
  }
  if (iaPlay === 3) {
    iaChoice = "Ciseaux";
    document.getElementById("iaChoice").src = "./img/ciseaux.png";
  }
  console.log(iaPlay);
  compareChoices();
};

const compareChoices = () => {
  let resultat = "";

  if (playerChoice === "Pierre") {
    if (iaChoice === "Feuille") {
      resultat = "l'IA a gagné";
      iaScore++;
    } else if (iaChoice === "Ciseaux") {
      resultat = "Vous avez gagné !";
      playerScore++;
    } else {
      resultat = "Egalité !";
    }
  }
  if (playerChoice === "Feuille") {
    if (iaChoice === "Ciseaux") {
      resultat = "l'IA a gagné !";
      iaScore++;
    } else if (iaChoice === "Pierre") {
      resultat = "Vous avez gagné !";
      playerScore++;
    } else {
      resultat = "Egalité !";
    }
  }
  if (playerChoice === "Ciseaux") {
    if (iaChoice === "Pierre") {
      resultat = "l'IA a gagné";
      iaScore++;
    } else if (iaChoice === "Feuille") {
      resultat = "Vous avez gagné !";
      playerScore++;
    } else {
      resultat = "Egalité !";
    }
  }
  document.getElementById("resultat").innerHTML = resultat;
  scoreJoueur.innerHTML = playerScore;
  scoreIa.innerHTML = iaScore;
};

let playerChoice = null;
let iaChoice = null;

function getRandomArbitrary() {
  let min = Math.ceil(1);
  let max = Math.floor(3);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let playerScore = 0;
let iaScore = 0;
