function tellFortune(numChildren, partName, geoLocation, jobTitle) {
    return `You will be a ${jobTitle} in ${geoLocation}, and married to ${partName} with ${numChildren}`
}

console.log(tellFortune(4, 'Tom', 'Rotterdam', 'Artist'))
console.log(tellFortune('zeroooow', 'nobody', 'Amsterdam', 'Homeless'))
console.log(tellFortune(19, 'Khun Sean', 'Thailand', 'King'))


function calculateDogAge(age) {
    let humanAge = age * 7;
    return `Your doggie is ${humanAge} years old in dogyears!`
}

console.elog(calculateDogeAge(7))