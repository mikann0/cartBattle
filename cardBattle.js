let listCard = [
    {
        name: "1",
        attack: 12,
        heal: 2,
        imgCard: ""
    },
    {
        name: "2",
        attack: 10,
        heal: 4,
        imgCard: ""
    },
    {
        name: "3",
        attack: 8,
        heal: 6,
        imgCard: ""
    },
    {
        name: "4",
        attack: 6,
        heal: 8,
        imgCard: ""
    },
    {
        name: "5",
        attack: 4,
        heal: 10,
        imgCard: ""
    },
    {
        name: "6",
        attack: 2,
        heal: 12,
        imgCard: ""
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

img[0].img.src = "listCard[*].imgCard"
charactorName[0].textContent = "listCard[*].name"

img[1].img.src = "listCard[*].imgCard"
charactorName[1].textContent = "listCard[*].name"

attack.addEventListener("click", playerAttack)
heal.addEventListener("click", playerHeal)


function playerAttack() {
    healthLevel[0].textContent = pcHealthLevel - listCard[*].attack + " / 100"
    console.log(pcHealthLevel - listCard[*].attack)
}

function playerHeal() {
    if (playerHealthLevel + listCard[*].heal >= 100) {
        healthLevel[1].textContent = "100 / 100"
    } else {
        healthLevel[1].textContent = playerHealthLevel + listCard[*].heal + " / 100"

    }
}

function pcAttack() {
    healthLevel[1].textContent = playerHealthLevel - listCard[*].attack + " / 100"
    console.log(pcHealthLevel - listCard[*].attack)
}

function pcHeal() {
    if (pcHealthLevel + listCard[*].heal >= 0) {
        healthLevel[0].textContent = "100 / 100"
    } else {
        healthLevel[0].textContent = pcHealthLevel + listCard[*].heal + " / 100"
    }
}


    function pc() {
        let number = Math.floor(Math.random() * 2 + 1)
        if (number == 1) {
            pcAttack()
        } else {
            pcHeal()
        }
    }

    function youAttack() {
        playerAttack()
        if (playerHealthLevel == 0 || pcHealthLevel == 0) {
            // fini
        }
        if (playerHealthLevel != 0 && pcHealthLevel != 0) {
            // continue
            pc()
        }
    }

    function youHeal() {
        playerHeal()
        if (playerHealthLevel == 0 || pcHealthLevel == 0) {
            // fini
        }
        if (playerHealthLevel != 0 && pcHealthLevel != 0) {
            // continue
            pc()
        }
    }