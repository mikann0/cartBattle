
let listCard = [
    {
        name : "Leader",
        attack : 12,
        heal : 2,
        imgCard : "img/Leader.png"
    },
    {
        name : "Trickster",
        attack : 10,
        heal : 4,
        imgCard : "img/Trickster.png"
    },
    {
        name : "Collector",
        attack : 8,
        heal : 6,
        imgCard : "img/Collector.png"
    },
    {
        name : "Saboteur",
        attack : 6,
        heal : 8,
        imgCard : "img/Saboteur.png"
    },
    {
        name : "Support",
        attack : 4,
        heal : 10,
        imgCard : "img/Support.png"
    },
    {
        name : "Enforcer",
        attack : 2,
        heal : 12,
        imgCard : "img/Enforcer.png"
    }
]

const chooseCard = document.querySelectorAll('.card');
const cardName = document.querySelectorAll('.cardNameTxt');
const damageNumber = document.querySelectorAll('.damage');
const healNumber = document.querySelectorAll('.heal');
const cardImg = document.querySelectorAll('.cardImg');

let choixJoueur;
let choixBot;

for (let i = 0; i < listCard.length; i++){
    chooseCard[i].addEventListener('click', function(){
        showCard(i)
    })
}

function showCard(i){
    console.log(listCard[i]);
    choixJoueur = i;
    choixBot = Math.floor(Math.random()*6);
    console.log(choixJoueur);
    console.log(choixBot);
}



for (let i = 0; i < listCard.length; i++) {
    damageNumber[i].textContent += listCard[i].attack   
    healNumber[i].textContent += listCard[i].heal   
    cardName[i].textContent += listCard[i].name   
    cardImg[i].src = listCard[i].imgCard
}