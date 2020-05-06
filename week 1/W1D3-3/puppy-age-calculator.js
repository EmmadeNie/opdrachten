function calculateDogAge(age, conversion) {
    let humanAge = age * conversion;
    return `Your doggie is ${humanAge} years old in dog years!`
}

console.log(calculateDogAge(7, 7))
console.log(calculateDogAge(6, 7))
console.log(calculateDogAge(2, 7))
