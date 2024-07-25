/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let toConvert = 0 // the number we want to use 
const convertBtn = document.getElementById("convert-btn")
const number = document.getElementById("number")
const ratios = [3.281, 0.264, 2.204] // radios to make the conversions -> (metric -> Imperial)
const ratiosInv = [] // same^ but (imperial -> metric)
const divEl = document.getElementsByClassName("result") // array that stores locations of the div's (in order)

// Filling in rationsInv values: 
for(let i = 0; i < 3; i++){
    ratiosInv.push(1/ratios[i])
}

convertBtn.addEventListener('click', function(){
    toConvert = number.value
    render("meters", "feet", 0)
    render("liters", "gallons", 1)
    render("kilos", "pounds", 2)
})

function render(from, to, position){ // convert from->to & to->from. Position can represent (Length - Volume - Mass, respectively)
    let leftValue = toConvert * ratios[position]
    let rightValue = toConvert * ratiosInv[position]
    let ans = `${toConvert} ${from} = ${leftValue.toFixed(3)} | `
    ans += `${toConvert} ${to} = ${rightValue.toFixed(3)}`

    divEl[position].textContent = ans 
}