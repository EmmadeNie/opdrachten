let name = prompt("Hi there! What is your name?");
alert("Hi, " + name + "!")

let guess = +prompt("guess a number (van 0 tm 25" + name)

let beurt = 4

if (guess > 25) {
    guess = prompt("Guess again. 0 tm 25 please");
}

console.log(guess)
console.log(typeof guess)

let random = Math.floor(Math.random() * 2)

while (guess !== random || beurt > 0) {
    guess = prompt(`Wrong! Guess again. je hebt nog ${beurt} beurt(en) over.`);
    beurt--;
}
alert("You got it girl!")
