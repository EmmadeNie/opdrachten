const button = document.querySelector('#mybutton')
const body = document.querySelector('#body');
const btnChangeBackground = document.querySelector('#btnChangeBackground')

const buttonClicked = function () {
    alert("Missile will fire in 3..2..1.....")
}

button.addEventListener('click', buttonClicked)

const changeBackground = function () {
    const classes = body.className.split(" ");
    const i = classes.indexOf("red-background");
    console.log(typeof classes)


    if (i >= 0)
        classes.splice(i, 1);
    else
        classes.push("red-background");
    body.className = classes.join(" ");

}
btnChangeBackground.addEventListener('click', changeBackground)

//Ik heb het zo gedaan dat de red-background class en de blue-background class vervangt. Lijkt me wenselijker! :) 