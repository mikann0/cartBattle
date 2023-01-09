
let listCard = [
    {
        name : "Leader",
        attack : 12,
        heal : 2,
        imgCard : "img/Leader.png",
        bg : "rgb(190, 164, 164)"
    },
    {
        name : "Trickster",
        attack : 10,
        heal : 4,
        imgCard : "img/Trickster.png",
        bg : "rgb(70, 90, 117)"
    },
    {
        name : "Collector",
        attack : 8,
        heal : 6,
        imgCard : "img/Collector.png",
        bg : "rgb(73, 38, 83)"
    },
    {
        name : "Saboteur",
        attack : 6,
        heal : 8,
        imgCard : "img/Saboteur.png",
        bg : "rgb(138, 139, 77)"
    },
    {
        name : "Support",
        attack : 4,
        heal : 10,
        imgCard : "img/Support.png",
        bg : "rgb(59, 35, 35)"
    },
    {
        name : "Enforcer",
        attack : 2,
        heal : 12,
        imgCard : "img/Enforcer.png",
        bg : "rgb(43, 75, 54)"
    }
]

const chooseCard = document.querySelectorAll('.card');
const cardName = document.querySelectorAll('.cardNameTxt');
const damageNumber = document.querySelectorAll('.damage');
const healNumber = document.querySelectorAll('.heal');
const cardImg = document.querySelectorAll('.cardImg');
const ecran1 = document.querySelector('#ecran1');
const ecran2 = document.querySelector('#ecran2');
const lastInfo = document.querySelector('.textLastInfo')

let cartPc = document.querySelector(".cartPc")
let cartPlayer = document.querySelector(".cartPlayer")

let imgVs = document.querySelectorAll(".imgVs")
let charactorName = document.querySelectorAll(".divName h2")
let bar = document.querySelectorAll(".healthBar")
let healthLevel = document.querySelectorAll(".healthBar p")
let attack = document.querySelector(".attack2")
let heal3 = document.querySelector(".heal3")

let playerHealthLevel = 100
let pcHealthLevel = 100

let nbrLine = 0;

let choixJoueur;
let choixBot;


for (let i = 0; i < listCard.length; i++){
    afficheCardProperties(i)
    chooseCard[i].addEventListener('click', function(){
        showCard(i)
    })
}

function afficheCardProperties(i){
    chooseCard[i].style.backgroundColor = listCard[i].bg  
    damageNumber[i].textContent += listCard[i].attack   
    healNumber[i].textContent += listCard[i].heal   
    cardName[i].textContent += listCard[i].name   
    cardImg[i].src = listCard[i].imgCard
}

function showCard(i){
    console.log(listCard[i]);
    choixJoueur = i;
    choixBot = Math.floor(Math.random()*6);
    console.log(choixJoueur);
    console.log(choixBot);
    
    charactorName[0].textContent = listCard[choixBot].name
    charactorName[1].textContent = listCard[choixJoueur].name

    imgVs[0].src = listCard[choixBot].imgCard
    imgVs[1].src = listCard[choixJoueur].imgCard

    ecran1.style.display = 'none'
    ecran2.style.display = 'block'

    cartPc.style.backgroundColor = listCard[choixBot].bg
    cartPlayer.style.backgroundColor = listCard[choixJoueur].bg
}


function Attack(targetHealthLevel, cardInformation, cardIndex) {
    targetHealthLevel - listCard[cardInformation].attack
    if (targetHealthLevel - listCard[cardInformation].attack > 0) {
        healthLevel[cardIndex].textContent = targetHealthLevel - listCard[cardInformation].attack + " / 100"
        console.log(targetHealthLevel - listCard[cardInformation].attack)
        targetHealthLevel -= listCard[cardInformation].attack
    } else {
        console.log("gagné "+cardInformation)
        healthLevel[cardIndex].textContent = "0 / 100"
        targetHealthLevel = 0
    }
    if(nbrLine>5)
        cleanText()
    if(cardIndex==0)
        lastInfo.textContent += "Joueur attaque pour "+listCard[cardInformation].attack
    else
        lastInfo.textContent += "Ordinateur attaque pour "+listCard[cardInformation].attack
    lastInfo.textContent += '\n'
    nbrLine++
    return targetHealthLevel
}


function Heal(ownHealthLevel, cardInformation, cardIndex) {
    ownHealthLevel + listCard[cardInformation].heal
    if (ownHealthLevel + listCard[cardInformation].heal >= 100) {
        healthLevel[cardIndex].textContent = "100 / 100"
        ownHealthLevel = 100
    } else {
        healthLevel[cardIndex].textContent = ownHealthLevel + listCard[cardInformation].heal + " / 100"
        ownHealthLevel += listCard[cardInformation].heal
    }
    if(nbrLine>5)
        cleanText()
    if(cardIndex==0)
        lastInfo.textContent += "Ordinateur se soigne pour "+listCard[cardInformation].heal
    else
        lastInfo.textContent += "Joueur se soigne pour "+listCard[cardInformation].heal
    lastInfo.textContent += '\n'
    nbrLine++
    return ownHealthLevel
}


function pc() {
    let number = Math.floor(Math.random() * 2 + 1)
    if (number == 1) {
        playerHealthLevel=Attack(playerHealthLevel, choixBot, 1)
        console.log("attack")
    } else {
        pcHealthLevel=Heal(pcHealthLevel, choixBot, 0)
        console.log("heal")
    }
    return playerHealthLevel;
}

function youAttack() {
    pcHealthLevel=Attack(pcHealthLevel, choixJoueur, 0);
    playerHealthLevel = pc()
    // setTimeout(pc, 2*1000);
}

function youHeal() {
    playerHealthLevel=Heal(playerHealthLevel, choixJoueur, 1);
    pcHealthLevel = pc()
    // setTimeout(pc, 2*1000);
}

function cleanText(){
    nbrLine = 0
    lastInfo.textContent = "";
}

attack.addEventListener("click",youAttack)
heal3.addEventListener("click",youHeal)
