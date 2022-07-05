let scoreJoueur = document.getElementById("score-joueur");
let scoreIa = document.getElementById("score-ia");
const gameEnd=document.getElementById("gameEnd");

let playerScore = 0
let iaScore = 0

let playerRound = 0
let iaRound = 0

let gameRound = 0

const pierreClicked = () => {
  document.getElementById("playerChoice").src = "./img/pierre.png";
  playerChoice = "Pierre";
  document.getElementById("iaChoice").src ="./img/gif_hand.gif"
  setTimeout(iaTour, 1600)  
};

const ciseauxClicked = () => {
  document.getElementById("playerChoice").src = "./img/ciseaux.png";
  playerChoice = "Ciseaux";
  document.getElementById("iaChoice").src ="./img/gif_hand.gif"
  setTimeout(iaTour, 1600)   
};

const feuilleClicked = () => {
  document.getElementById("playerChoice").src = "./img/feuille.png";
  playerChoice = "Feuille";
  document.getElementById("iaChoice").src ="./img/gif_hand.gif"
  setTimeout(iaTour, 1600)  
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
  let resultat2 = ""
  

  if (playerChoice === "Pierre") {
    if (iaChoice === "Feuille") {
      resultat = "l'IA a gagné cette manche";
      iaScore++;
    } else if (iaChoice === "Ciseaux") {
      resultat = "Vous avez gagné cette manche";
      playerScore++;
    } else {
      resultat = "Egalité !";
    }
  }
  if (playerChoice === "Feuille") {
    if (iaChoice === "Ciseaux") {
      resultat = "l'IA a gagné cette manche";
      iaScore++;
    } else if (iaChoice === "Pierre") {
      resultat = "Vous avez gagné cette manche";
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
      resultat = "Vous avez gagné cette manche!";
      playerScore++;
    } else {
      resultat = "Egalité !";
    }
  }
    // resultat2 = "Round " + gameRound


  if (playerScore === 3){
    playerRound++
    gameRound++
    playerScore = 0
    iaScore = 0
    resultat = "Vous avez gagner la partie !! (ce n'était qu'une IA)" 
    const video=document.createElement('video');
        video.src='./img/gigachad.mp4';
        video.autoplay = true;
        video.controls = false;
        video.muted = false;
        video.volume = 0.1
        gameEnd.appendChild(video);
        gameEnd.style.display="block"
        video.addEventListener('ended', (event) => {
            gameEnd.style.display = 'none';
            gameEnd.innerHTML='';
        })   
        
  } else if (iaScore === 3) {
    iaRound++
    gameRound++
    playerScore = 0
    iaScore = 0
    resultat = "La magnifique IA a gagné la partie !!!"
    const video=document.createElement('video');
        video.src='./img/nelson.mp4';
        video.autoplay = true;
        video.controls = false;
        video.muted = false;
        video.volume = 0.1
        gameEnd.appendChild(video);
        gameEnd.style.display="block"
        video.addEventListener('ended', (event) => {
            gameEnd.style.display = 'none';
            gameEnd.innerHTML='';
        })
  }

  // if (playerRound === 3) {
  //   resultat = "Vous avez gagné ! (ce n'est qu'une IA..)"
    
  // } else if (iaRound === 3) {
  //   resultat ="Game Over... Vous avez perdu face à une IA..."
  // }

 



  
  document.getElementById("resultat").innerHTML = resultat;
  document.getElementById("resultat2").innerHTML = resultat2;
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


