//creerun tableau d-image, onmets 2 fois les images

const cardArray = [
    {
        name: 'fleur',
        img: 'images/fleur.jpeg',

    },
    {
        name: 'campagne',
        img: 'images/campagne.jpeg',

    },
    {
        name: 'montagne',
        img: 'images/montagne.jpeg',

    },
    {
        name: 'oiseau',
        img: 'images/oiseau.jpeg',

    },
    {
        name: 'plage',
        img: 'images/plage.jpeg',
    },
    {
        name: 'ville',
        img: 'images/ville.jpeg'
    },

    {
        name: 'fleur',
        img: 'images/fleur.jpeg',

    },
    {
        name: 'campagne',
        img: 'images/campagne.jpeg',

    },
    {
        name: 'montagne',
        img: 'images/montagne.jpeg',

    },
    {
        name: 'oiseau',
        img: 'images/oiseau.jpeg',

    },
    {
        name: 'plage',
        img: 'images/plage.jpeg',
    },
    {
        name: 'ville',
        img: 'images/ville.jpeg'
    },


]

//suite de l etape glipCard. Je cree une variable qui va not'e les cartes sur lesquelle le joueur clic. La varible est vide car elle va etre completer au fur et a mesure
const cardChosen = []
const card = []
//je regroupe les ids des cartes cliquee
const cardChosenIds= []
// je regroupe les cartes qui ont matchees
const cardWon = []
//console.log(cardArray);

//on cree la constante pour saisir le resultat
const resultDisplay= document.querySelector('#result') 


// creer la fonction aleatoire (random)pour le tableau    VERSION RACCOURCI
cardArray.sort(() => 0.5 - Math.random())


//on cree le tableau en selectionnant la div avec l id # grid
const gridDisplay = document.querySelector('#grid')
//on cree le tableau
function creatBoard() {
    //besoin de cerre une boucle pour afficher toutes les images. soit on met le nombre d-image qu on connait/ veut, soit on indique la longueur du tableau
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img')
        //on attribue une image de -couverture-
        card.setAttribute('src', 'images/vacances.jpeg')
        // on ajoute un data id a chaque image
        card.setAttribute('data-Id', i)

        // on met un event listener pour saisir a chaque fois que le joueur clique sur une card.  Ce qui declanche la fonction flipCard
        card.addEventListener('click', flipCard)

        //on place la liste card cree comme enfant de la div grid
        gridDisplay.appendChild(card)
    }

}

//3eme etape la fonction checkMatch
function checkMatch(){
    //je selectionne toutes les images
    const cards = document.querySelectorAll('img')
    //creer des constantes pour les choix a chaque tour
    const optionOneId= cardChosenIds[0]
    const optionTwoId= cardChosenIds[1]

    //si on clique deux fois sur la meme image
    if (optionOneId===optionTwoId) { 
            alert ('vous avez selectionne deux fois l-image')
    }
    //si la premiere card choisie [0] est la meme que la seconde [1], on les ajoute 
    //dans un autre tableau cards et un attribut qui lescache
    if(optionOneId===optionTwoId){
        alert ('Bien joue !')
       card[optionOneId].setAttribute("hidden", true); 
       card[optionTwoId].setAttribute("hidden", true); 
       //onleur quitte la fonction flipCard
       card[optionOneId].removeEventListener('click',flipCard);
       card[optionTwoId].removeEventListener('click',flipCard);
       // on le range dansle tableau carte gagnee
       cardWon.push(cardChosen)
}
//sinon, on retourne de nouveau les cartes en remettent l image de recto
else {
    card[optionOneId].setAttribute('src','images/vacances.jpeg'); 
    card[optionTwoId].setAttribute('src','images/vacances.jpeg'); 
        alert ('essaye encore !')
}

// si on trouve 6 bonnes paires, le resultat est affiche
if (cardWon.lenght==  cardArray.lenght/2){
    //fait apparaitre un messaqge dans le resultat
    resultDisplay.textContent ='Felicitation !'
}
}


// 2 eme fonction pour faire se retourner les cartes
//on veut seulement les appeler si on clique dessus,
function flipCard() {
    // on creer la constante pour slectionner les cartes
    //this s-attribue a chaque element
    let cardId = this.getAttribute('data-id')

    // on push les cards cliquees dans le tableau cardChosen
    cardChosen.push(cardArray[cardId].name)

    // on push les id des cards choisies dans un tableau
  cardChosenIds.push(cardId)

    // je lui attribue limage du tableau qui correspond a l-id
    this.setAttribute('src', cardArray[cardId].img)
    
// on fait se retourner les cartes en face cachee quand on en a tire 2 
    if(cardChosen.length === 2){
        //on declenche la fonction checkMatch et on se donne un intervale de temps de 500 millisecondes
            setTimeout(checkMatch, 500)
    }
}

//on appele les fonctions
creatBoard()
checkMatch()
flipCard()
