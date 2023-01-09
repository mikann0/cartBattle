console.log("😊")

let listCard = [
    {
        name: "Leader",
        attack: 12,
        heal: 2,
        imgCard: "img/Leader.png"
    },
    {
        name: "Trickster",
        attack: 10,
        heal: 4,
        imgCard: "img/Trickster.png"
    },
    {
        name: "Collector",
        attack: 8,
        heal: 6,
        imgCard: "img/Collector.png"
    },
    {
        name: "Saboteur",
        attack: 6,
        heal: 8,
        imgCard: "img/Saboteur.png"
    },
    {
        name: "Support",
        attack: 4,
        heal: 10,
        imgCard: "img/Support.png"
    },
    {
        name: "Enforcer",
        attack: 2,
        heal: 12,
        imgCard: "img/Enforcer.png"
    }
]


let img = document.querySelectorAll("img")
let charactorName = document.querySelectorAll(".divName h2")
let bar = document.querySelectorAll(".healthBar")
let healthLevel = document.querySelectorAll(".healthBar p")
let attack = document.querySelector(".attack")
let heal = document.querySelector(".heal")

let playerHealthLevel = 100
let pcHealthLevel = 100

let choixJoueur = 0
let choixBot = 5

// img[0].img.src = listCard[j].imgCard
charactorName[0].textContent = listCard[choixBot].name

// img[1].img.src = listCard[i].imgCard
charactorName[1].textContent = listCard[choixJoueur].name


// //pc choixJoueur 0
// function playerAttack() {
//     pcHealthLevel - listCard[choixJoueur].attack
//     if(pcHealthLevel - listCard[choixJoueur].attack>0){
//     healthLevel[0].textContent = pcHealthLevel - listCard[choixJoueur].attack + " / 100"
//     console.log(pcHealthLevel - listCard[choixJoueur].attack)
//     pcHealthLevel -= listCard[choixJoueur].attack
//     }else{
//         //youWin
//     }
// }

// //player choixBot 1
// function pcAttack() {
//     playerHealthLevel - listCard[choixBot].attack
//     if(playerHealthLevel - listCard[choixBot].attack>0){
//     healthLevel[1].textContent = playerHealthLevel - listCard[choixBot].attack + " / 100"
//     console.log(playerHealthLevel - listCard[choixBot].attack)
//     playerHealthLevel -= listCard[choixBot].attack
//     }else{
//         //youLose
//     }
// }
function Attack(level, x, y) {
    level - listCard[x].attack
    if (level - listCard[x].attack > 0) {
        healthLevel[y].textContent = level - listCard[x].attack + " / 100"
        console.log(level - listCard[x].attack)
        level -= listCard[x].attack
    } else {
        console.log("gagné "+x)
        healthLevel[y].textContent = "0 / 100"
        level = 0
    }
    return level
}

// //player choixJoueur 1
// function playerHeal() {
//     playerHealthLevel + listCard[choixJoueur].heal
//     if (playerHealthLevel + listCard[choixJoueur].heal >= 100) {
//         healthLevel[1].textContent = "100 / 100"
//         playerHealthLevel  = 100
//     } else {
//         healthLevel[1].textContent = playerHealthLevel + listCard[choixJoueur].heal + " / 100"
//         playerHealthLevel =+ listCard[choixJoueur].heal
//     }
// }

// // pc j 0 
// function pcHeal() {
//     pcHealthLevel + listCard[choixBot].heal
//     if (pcHealthLevel + listCard[choixBot].heal >= 100) {
//         healthLevel[0].textContent = "100 / 100"
//         pcHealthLevel = 100
//     } else {
//         healthLevel[0].textContent = pcHealthLevel + listCard[choixBot].heal + " / 100"
//         pcHealthLevel += listCard[choixBot].heal
//     }
// }

function Heal(level, x, y) {
    level + listCard[x].heal
    if (level + listCard[x].heal >= 100) {
        healthLevel[y].textContent = "100 / 100"
        level = 100
    } else {
        healthLevel[y].textContent = level + listCard[x].heal + " / 100"
        level += listCard[x].heal
    }
    return level
}


function pc() {
    // let number = Math.floor(Math.random() * 2 + 1)
    let number = 1
    if (number == 1) {
        playerHealthLevel=Attack(playerHealthLevel, choixBot, 1)
        console.log("attack")
    } else {
        pcHealthLevel=Heal(pcHealthLevel, choixBot, 0)
        console.log("heal")
    }
}

function youAttack() {
    pcHealthLevel=Attack(pcHealthLevel, choixJoueur, 0);
    setTimeout(pc, 2*1000);
}

function youHeal() {
    playerHealthLevel=Heal(playerHealthLevel, choixJoueur, 1);
    setTimeout(pc, 2*1000);
}

attack.addEventListener("click",youAttack)
heal.addEventListener("click",youHeal)