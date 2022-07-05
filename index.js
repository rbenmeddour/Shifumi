const pierreClicked = () => {
  document.getElementById("playerChoice").src="./img/pierre.jpg"
  playerChoice = "Pierre"
  iaTour()
}

const ciseauxClicked = () => {
  document.getElementById("playerChoice").src="./img/ciseaux.jpg"
  playerChoice = "Ciseaux"
  iaTour()
}

const feuilleClicked = () => {
  document.getElementById("playerChoice").src="./img/feuille.jpg"
  playerChoice = "Feuille"
  iaTour()
}

const iaTour = () => {
  let iaPlay = getRandomArbitrary()
  if (iaPlay === 1) {
      iaChoice = "Pierre"
      document.getElementById("iaChoice").src="./img/pierre.jpg"
  }
  if (iaPlay === 2) {
      iaChoice = "Feuille"
      document.getElementById("iaChoice").src="./img/feuille.jpg"
  }
  if (iaPlay === 3) {
      iaChoice = "Ciseaux" 
      document.getElementById("iaChoice").src="./img/ciseaux.jpg"
  }
  console.log(iaPlay)
  compareChoices()
}    

const compareChoices = () => {
  let resultat = ""

  if (playerChoice === "Pierre") {
      if (iaChoice === "Feuille") {
          resultat = "l'IA a gagné"
      } else if (iaChoice === "Ciseaux") {
          resultat = "Vous avez gagné !"
      } else {
          resultat = "Egalité !"
      }
  }
  if (playerChoice === "Feuille") {
      if (iaChoice === "Ciseaux") {
          resultat = "l'IA a gagné"
      } else if (iaChoice === "Pierre") {
        resultat = "Vous avez gagné !"
      } else {
          resultat = "Egalité !"
      }
  }
  if (playerChoice === "Ciseaux") {
      if (iaChoice === "Pierre") {
          resultat = "l'IA a gagné"
      } else if (iaChoice === "Feuille") {
          resultat = "Vous avez gagné !"
      } else {
          resultat = "Egalité !"
      }
  }
  document.getElementById("resultat").innerHTML = resultat
}


let playerChoice = null
let iaChoice = null




function getRandomArbitrary() {
      let min = Math.ceil(1);
      let max = Math.floor(3);
      return Math.floor(Math.random() * (max - min + 1)) + min;
}
