// je cree les constantes pour chaque choix et result

const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('resultat');

//stocke la reponse
let userChoice
let computerChoice
let result

//je cree la constant pour les boutons

const possibleChoices = document.querySelectorAll('button');

//je cree  la fonction pour les boutons > fait apparaitre le choix dans la ligne user-choice lorsque l-on clique dessus

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    //la const userChoise est la cible de l'action
    userChoice = e.target.innerHTML;
    //on fait apparaitre du HTML 
    userChoiceDisplay.innerHTML = userChoice;


    // cela genere la reponse de l-ordinateur
    generateComputerChoice()
    getResult()
}
))

// je cree la function de choix de l ordinateur
function generateComputerChoice() {
    // le nombre est genere aleatoirement en se basant sur les 3 reponses possibles
    //1er possibilite const randomNumber = Math.random()*possibleChoices.length;

    //2eme possibilite > on indique directement le nombre doptions   *le +1 pour ne pas commencer a 0
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    ;
    //mettre les diffrentes possibilites de resultats de l ordinateur

    if (randomNumber === 1) {
        computerChoice = 'Pierre';
    }
    if (randomNumber === 2) {
        computerChoice = 'Papier';
    }

    if (randomNumber === 3) {
        computerChoice = 'Ciseaux';
    }
    //on fait apparaitre dans la reponse
    computerChoiceDisplay.innerHTML = computerChoice;
}


//on fait apparaitre le result final
function getResult() {
    if (computerChoice === userChoice) {
        result = 'Essayez a nouveau';
    }
    if (computerChoice == 'rock' && userChoice == "paper") {
        result = 'Gagne';
    }
    if (computerChoice == 'paper' && userChoice == "scissors") {
        result = 'Gagne';
    }
    if (computerChoice == 'scissors' && userChoice == "rock") {
        result = 'Gagne';
    }
    if (computerChoice == 'rock' && userChoice == "scissors") {
        result = 'Perdu';
    } if (computerChoice == 'paper' && userChoice == "rock") {
        result = 'Perdu';
    } if (computerChoice == "scissors" && userChoice == "paper") {
        result = 'Perdu';
    }

    resultDisplay.innerHTML = result;

    console.log(result)
    console.log(computerChoice)

}