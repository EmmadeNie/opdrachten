// recept makeHollandsBroodje.
//     neem een broodje.
//     leg er ham op.
//     sluit het broodje.

function makeHollandsBroodje() {
    console.log('neem een broodje. Leg er ham op. sluithet broodje')
}

makeHollandsBroodje()

function makeSandwich(topping) {
    console.log(`neem een broodje. Leg er ${topping} op. sluit het broodje`)
} //Dit is de function declaration. hier wordt die gedeclareert

makeSandwich('kaas')//hier call ik de function declaration
let broodjeWorst = makeSandwich('worst')//hier call de functie nogmaals en geef ik hem mee aan een nieuwe variabel

console.log(broodjeWorst) //ff testen of dit nog altijd mijn broodjeWorst is.

let calculateDiscountedPrice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(12, 3))

let calculateSpecialDiscountedPrice = function (totalAmount, discount) {
    if (totalAmount >= 25) {
        return Math.round(totalAmount - discount);
    } else {
        return totalAmount
    }
}


console.log(calculateSpecialDiscountedPrice(23, 3))