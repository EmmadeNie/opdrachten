const age = 19;
const name = 'Sara';
const isFemale = false;
const driverStatus = 'Bob';
const isDeBob = driverStatus.toLowerCase();
const totalAmount = 10
console.log(isDeBob)


if (age >= 18) {
    console.log('Je mag naar binnen!');
} else {
    console.log('Je mag niet naar binnen, excusé')
}

if (isFemale === true) {
    console.log('Je bent een een vrouw');
} else {
    console.log('Je bent een man')
}

if (isDeBob === 'bob') {
    console.log('Je bent de bob');
} else {
    console.log('Je bent niet de bob, ga zuipen!')
}

if (age >= 18 && age <= 25) {
    console.log('Je krijgt 50% korting');
} else {
    console.log('geen korting voor jou')
}

if (name === 'Bram' || name === 'Sarah') {
    console.log('Je krijgt korting jettie!');
} else {
    console.log('Lieg niet, geen korting voor jou')
}

if (totalAmount >= 25 && totalAmount < 50) {
    console.log('Je krijgt (vega)bitterballen, ouwe veganist!');
} else if (totalAmount >= 50 && totalAmount < 100) {
    console.log('en jij krijgt..... NACHOS!')
} else if (totalAmount >= 100) {
    console.log('Champagnéjeejee!')
} else {
    console.log('Dit zijn je biertjes, alsjeblieft.')
}