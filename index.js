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
const resetBtn = document.getElementById("reset")
const alertTxt = document.getElementById("alert")

// const resetBtn = document.getElementsByClassName("reset")

// console.log('resetBtn', resetBtn[0].innerHTML)

let bill = 0;
let tip = 0;
let numberOfPeople = 0;
const activeColor = "hsl(172, 67%, 45%)"
const defalutColor = "hsl(183, 100%, 15%)"
const errorColor = 'rgb(205, 146, 79)'



// const tipValusArray = [5, 10, 15, 25, 50]
const tipBtnArry = [five, ten, fifteen, twentyFive, fifty]

inputBill.addEventListener("change", (e) => {
    bill = e.target.value
    tipAmountPerPerson();
    totalAmountPerPerson()
    consoleAllTips(bill, tip, numberOfPeople)
})


resetBtn.addEventListener('click', (e) => {
    tip = 0
    bill = 0;
    numberOfPeople = 0;
    tipAmountResult.innerHTML = 0
    totalAmountResult.innerHTML = 0

    inputBill.value = 0
    console.log('inputBill.innerHTML', inputBill.innerHTML)
    consoleAllTips(bill, tip, numberOfPeople)
        // console.log('restBtnClicked')
        // tipAmountPerPerson();
        // totalAmountPerPerson()
        //     // console.log(tip)
        // consoleAllTips(bill, tip, numberOfPeople)

    // activeBtnColor()
})
five.addEventListener('click', () => {
    tip = 5
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)

    activeBtnColor()
})

ten.addEventListener('click', () => {
    tip = 10
    tipAmountPerPerson();
    totalAmountPerPerson()
    activeBtnColor()

})

fifteen.addEventListener('click', () => {
    tip = 15
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)
    activeBtnColor()

})

twentyFive.addEventListener('click', () => {
    tip = 25
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)
    activeBtnColor()


})

fifty.addEventListener('click', () => {
    tip = 50
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(tip)
    consoleAllTips(bill, tip, numberOfPeople)
    activeBtnColor()


})

custom.addEventListener('change', (e) => {
    tip = e.target.value
    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(custom)
    consoleAllTips(bill, tip, numberOfPeople)

})

inputPersons.addEventListener('change', (e) => {

    // inputPersons.style.border = '2px solid red'
    numberOfPeople = e.target.value
    if (numberOfPeople < 1) {

        alertTxt.style.display = "block"
        inputPersons.style.outline = `2px solid  ${errorColor}`

    } else {

        alertTxt.style.display = "none"
        inputPersons.style.outline = ` 2px solid ${defalutColor}`
    }






    tipAmountPerPerson();
    totalAmountPerPerson()
        // console.log(numberOfPeople)
    consoleAllTips(bill, tip, numberOfPeople)

})

// function hideAlert() {
//     if (numberOfPeople > 0) {
//         alertTxt.style.display = "none"
//     }
// }







function tipAmountPerPerson() {
    if (numberOfPeople > 0) {
        const cal = (bill * tip) / (100 * numberOfPeople)
        tipAmountResult.innerHTML = Math.round((cal + Number.EPSILON) * 100) / 100
        return cal
    }


}

function totalAmountPerPerson() {
    if (numberOfPeople > 0) {
        // totalAmountResult.innerHTML = bill / numberOfPeople + tipAmountPerPerson()
        totalAmountResult.innerHTML = Math.round(((bill / numberOfPeople + tipAmountPerPerson()) + Number.EPSILON) * 100) / 100
    }
}


// totalAmountResult.innerHTML = Math.round(((bill / numberOfPeople + tipAmountPerPerson()) + Number.EPSILON) * 100) / 100

// Math.round(((bill / numberOfPeople + tipAmountPerPerson()) + Number.EPSILON) * 100) / 100
// Math.round((num + Number.EPSILON) * 100) / 100




function consoleAllTips(bill, tip, numberOfPeople) {
    console.log('bill-', bill)
    console.log('tip-', tip)
    console.log('numberOfPeople-', numberOfPeople)
}




function activeBtnColor() {
    for (let index = 0; index < tipBtnArry.length; index++) {
        if (tipBtnArry[index].innerText == tip + '%') {
            console.log('loopTip', tip + '%')
            tipBtnArry[index].style.background = activeColor
        } else {
            tipBtnArry[index].style.background = defalutColor
        }

    }

}