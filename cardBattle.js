
let listCard = [
    {
        name : "Leader",
        attack : [8,10],
        heal : [0,2],
        imgCard : "img/Leader.png",
        bg : "rgb(190, 164, 164)"
    },
    {
        name : "Trickster",
        attack : [10,12],
        heal : [2,4],
        imgCard : "img/Trickster.png",
        bg : "rgb(70, 90, 117)"
    },
    {
        name : "Collector",
        attack : [6,8],
        heal : [8,10],
        imgCard : "img/Collector.png",
        bg : "rgb(73, 38, 83)"
    },
    {
        name : "Saboteur",
        attack : [12,14],
        heal : [1,3],
        imgCard : "img/Saboteur.png",
        bg : "rgb(138, 139, 77)"
    },
    {
        name : "Support",
        attack : [2,4],
        heal : [10,12],
        imgCard : "img/Support.png",
        bg : "rgb(88, 55, 55)"
    },
    {
        name : "Enforcer",
        attack : [13,15],
        heal : [0,1],
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
    damageNumber[i].textContent += listCard[i].attack[0]+"/"+listCard[i].attack[1] 
    healNumber[i].textContent += listCard[i].heal[0]+"/"+listCard[i].heal[1]
    cardName[i].textContent += listCard[i].name   
    cardImg[i].src = listCard[i].imgCard
}

function showCard(i){
    console.log(listCard[i]);
    choixJoueur = i;
    do{
        choixBot = Math.floor(Math.random()*6);
    }while (choixBot==choixJoueur)
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
    let randAttack = randomMinMax(listCard[cardInformation].attack[0],listCard[cardInformation].attack[1])
    let calculHealth = targetHealthLevel - randAttack
    
    if (calculHealth > 0) {
        healthLevel[cardIndex].textContent = calculHealth + " / 100"
        bar[cardIndex].style.setProperty('--lifeWidth', calculHealth+'%')
        // console.log(targetHealthLevel - randAttack)
        targetHealthLevel -= randAttack
    } else {
        console.log("gagné "+cardInformation,cardIndex)
        healthLevel[cardIndex].textContent = "0 / 100"
        bar[cardIndex].style.setProperty('--lifeWidth', '0%')
        targetHealthLevel = 0
        // gagner(cardInformation,cardIndex)
    }

    if(nbrLine>5)
        cleanText()
    if(cardIndex==0)
        lastInfo.textContent += "Joueur attaque pour "+randAttack
    else
        lastInfo.textContent += "Ordinateur attaque pour "+randAttack

    lastInfo.textContent += '\n'
    nbrLine++
    return targetHealthLevel
}

function gagner(cardInformation,cardIndex){
    //style display block

}


function Heal(ownHealthLevel, cardInformation, cardIndex) {
    let randHeal = randomMinMax(listCard[cardInformation].heal[0],listCard[cardInformation].heal[1])
    let calculHealth = ownHealthLevel + randHeal
    console.log(calculHealth,"+",randHeal,"jj",cardIndex)

    if (calculHealth >= 100) {
        healthLevel[cardIndex].textContent = "100 / 100"
        bar[cardIndex].style.setProperty('--lifeWidth', '100%')
        ownHealthLevel = 100
    } else {
        ownHealthLevel = calculHealth
        healthLevel[cardIndex].textContent = calculHealth + " / 100"
        bar[cardIndex].style.setProperty('--lifeWidth', calculHealth+'%')
    }

    if(nbrLine>5)
        cleanText()
    if(cardIndex==0)
        lastInfo.textContent += "Ordinateur se soigne pour "+randHeal
    else
        lastInfo.textContent += "Joueur se soigne pour "+randHeal

    lastInfo.textContent += '\n'
    nbrLine++
    return ownHealthLevel
}


function pc() {
    let number = Math.floor(Math.random() * 2 + 1)
    if (number == 1) {
        playerHealthLevel=Attack(playerHealthLevel, choixBot, 1)
    } else {
        pcHealthLevel=Heal(pcHealthLevel, choixBot, 0)
    }
}

function youAttack() {
    pc();
    pcHealthLevel=Attack(pcHealthLevel, choixJoueur, 0);
}

function youHeal() {
    playerHealthLevel=Heal(playerHealthLevel, choixJoueur, 1);
    pc()
}

function cleanText(){
    nbrLine = 0
    lastInfo.textContent = "";
}

attack.addEventListener("click",youAttack)
heal3.addEventListener("click",youHeal)


function randomMinMax(min,max){
    return Math.floor(Math.random()*(max-min+1)+min)
}