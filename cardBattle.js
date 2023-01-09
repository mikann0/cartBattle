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

let i = 5
let j = 3

// img[0].img.src = listCard[j].imgCard
charactorName[0].textContent = listCard[j].name

// img[1].img.src = listCard[i].imgCard
charactorName[1].textContent = listCard[i].name


// //pc i 0
// function playerAttack() {
//     pcHealthLevel - listCard[i].attack
//     if(pcHealthLevel - listCard[i].attack>0){
//     healthLevel[0].textContent = pcHealthLevel - listCard[i].attack + " / 100"
//     console.log(pcHealthLevel - listCard[i].attack)
//     pcHealthLevel -= listCard[i].attack
//     }else{
//         //youWin
//     }
// }

// //player j 1
// function pcAttack() {
//     playerHealthLevel - listCard[j].attack
//     if(playerHealthLevel - listCard[j].attack>0){
//     healthLevel[1].textContent = playerHealthLevel - listCard[j].attack + " / 100"
//     console.log(playerHealthLevel - listCard[j].attack)
//     playerHealthLevel -= listCard[j].attack
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
        //fini
    }
}

// //player i 1
// function playerHeal() {
//     playerHealthLevel + listCard[i].heal
//     if (playerHealthLevel + listCard[i].heal >= 100) {
//         healthLevel[1].textContent = "100 / 100"
//         playerHealthLevel  = 100
//     } else {
//         healthLevel[1].textContent = playerHealthLevel + listCard[i].heal + " / 100"
//         playerHealthLevel =+ listCard[i].heal
//     }
// }

// // pc j 0 
// function pcHeal() {
//     pcHealthLevel + listCard[j].heal
//     if (pcHealthLevel + listCard[j].heal >= 100) {
//         healthLevel[0].textContent = "100 / 100"
//         pcHealthLevel = 100
//     } else {
//         healthLevel[0].textContent = pcHealthLevel + listCard[j].heal + " / 100"
//         pcHealthLevel += listCard[j].heal
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
}


function pc() {
    let number = Math.floor(Math.random() * 2 + 1)
    if (number == 1) {
        Attack(playerHealthLevel, j, 1);
    } else {
        Heal(pcHealthLevel, j, 0)
    }
}

function youAttack() {
    Attack(pcHealthLevel, i, 0);
    setTimeout(pc, 2*1000);
}

function youHeal() {
    Heal(playerHealthLevel, i, 1);
    setTimeout(pc, 2*1000);
}

attack.addEventListener("click",youAttack)
heal.addEventListener("click",youHeal)