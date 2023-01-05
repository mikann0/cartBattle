
let listCard = [
    {
        name : "1",
        attack : 12,
        heal : 2,
        imgCard : ""
    },
    {
        name : "2",
        attack : 10,
        heal : 4,
        imgCard : ""
    },
    {
        name : "3",
        attack : 8,
        heal : 6,
        imgCard : ""
    },
    {
        name : "4",
        attack : 6,
        heal : 8,
        imgCard : ""
    },
    {
        name : "5",
        attack : 4,
        heal : 10,
        imgCard : ""
    },
    {
        name : "6",
        attack : 2,
        heal : 12,
        imgCard : ""
    }
]

let chooseCard = document.querySelectorAll('.card');
let cardname = document.querySelectorAll('.cardNameTxt');
let damageNumber = document.querySelectorAll('.damage');
let healNumber = document.querySelectorAll('.heal');

for (var i = 0; i < listCard.length; i++){
    console.log(i)
    console.log(listCard[i])
    chooseCard[i].addEventListener('click', function(){
        console.log(i)
        showCard(i)
    })
}

function showCard(i){
    console.log(listCard[i])
}









// chooseCard[0].addEventListener('click', function(){
//     showCard(0)})
// chooseCard[1].addEventListener('click', function(){
//     showCard(1)})
// chooseCard[2].addEventListener('click', function(){
//     showCard(2)})
// chooseCard[3].addEventListener('click', function(){
//     showCard(3)})
// chooseCard[4].addEventListener('click', function(){
//     showCard(4)})
// chooseCard[5].addEventListener('click', function(){
//     showCard(5)})






for (let i = 0; i < listCard.length; i++) {
    damageNumber[i].textContent += listCard[i].attack   
    healNumber[i].textContent += listCard[i].heal   
    cardname[i].textContent += listCard[i].name   
}

// let a = 12


// localStorage.setItem("cardChoisie",a);

// let cat = localStorage.getItem(a);

// console.log(cat)