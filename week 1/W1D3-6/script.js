let name = prompt("Hi there! What is your name?");
alert("Hi, " + name + "!")
let range = +prompt(name + ", till what number would you like to guess?")
let beurt = +prompt(name + ", how many tries do you give yourself?")
let guess = +prompt(`Oke, ${name}. Guess a number between 0 and ${range}. You have ${beurt} tries.`)


if (guess > range) {
    guess = prompt("Guess again. You gave yourself a range between 0 and " + range);
}
range++
let random = Math.floor(Math.random() * range)

alert(random)

while (beurt > 0) {
    if (guess === random) {
        alert("You got it girl!")
    } else {
        guess = prompt(`Wrong! Guess again. je hebt nog ${beurt} beurt(en) over.`);
        beurt--;
    }
} alert("Helaas... Je beurten zijn voorbij! ")

