const inputBill = document.getElementById("bill")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twentyFive = document.getElementById("twentyFive")
const fifty = document.getElementById("fifty")
const custom = document.getElementById("custom")
const inputPersons = document.getElementById("persons")
const tipAmountResult = document.getElementById("tip-amount")
const totalAmountResult = document.getElementById("total-amount")


let bill = 0;
let tip = 0;
let numberOfPeople = 0;

inputBill.addEventListener("change", (e) => {
    bill = e.target.value
    tipAmountPerPerson();
    totalAmountPerPerson()
    consoleAllTips(bill, tip, numberOfPeople)
})


five.addEventListener('click', () => {
    tip = 5
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)

    if (tip == 5) {
        five.style.backgroundColor = 'red'

    }


})

ten.addEventListener('click', () => {
    tip = 10
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)
    if (tip == 10) {
        ten.style.backgroundColor = 'red'
    }
})

fifteen.addEventListener('click', () => {
    tip = 15
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)

})

twentyFive.addEventListener('click', () => {
    tip = 25
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)

})

fifty.addEventListener('click', () => {
    tip = 50
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)

})

custom.addEventListener('change', (e) => {
    custom = e.target.value
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(custom)
    consoleAllTips(bill, tip, numberOfPeople)

})

inputPersons.addEventListener('change', (e) => {

    numberOfPeople = e.target.value
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(numberOfPeople)
    consoleAllTips(bill, tip, numberOfPeople)

})






function tipAmountPerPerson() {
    if (numberOfPeople > 0) {
        const cal = (bill * tip) / (100 * numberOfPeople)
        tipAmountResult.innerHTML = cal
        return cal
    }


}

function totalAmountPerPerson() {
    if (numberOfPeople > 0) {
        totalAmountResult.innerHTML = bill / numberOfPeople + tipAmountPerPerson()
    }
}


function consoleAllTips(bill, tip, numberOfPeople) {
    console.log('bill-', bill)
    console.log('tip-', tip)
    console.log('numberOfPeople-', numberOfPeople)
}