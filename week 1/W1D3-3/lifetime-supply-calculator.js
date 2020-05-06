function calculateSupply(age, amount) {
    let daysLeft = (90 - age) * 365;
    let food = Math.round(daysLeft * amount);
    return `You will need ${food} to last you until the ripe old age of 90`
}

console.log(calculateSupply(28, 30))
console.log(calculateSupply(17, 2))
console.log(calculateSupply(141, 2)) //just for fun

console.log(calculateSupply(17, 29.5))