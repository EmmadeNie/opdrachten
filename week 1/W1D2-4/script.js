const age = 14;

const isFemale = false;
const driverStatus = 'Bob';
const isDeBob = driverStatus.toLowerCase();

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