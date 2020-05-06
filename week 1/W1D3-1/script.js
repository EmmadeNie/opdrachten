let person = {
    name: 'Emma',
    age: 28,
    evaluations: [7, 10, 9],
    colors: ['yellow', 'pink', 'orange']
}

console.log(person.name)
console.log(person['age'])
console.log([person.evaluations])
console.log(person.colors)
console.log(person.colors.length)
console.log(person.colors[0])
console.log(person.colors[person.colors.length - 1])

person.colors.push('green')
person.colors.push(5)
person.colors.push({ greeting: 'hi ik ben een object' })

console.log(person.colors)
console.log(person.colors[person.colors.length - 1].greeting)

//opdracht deel 3

const catBreeds = [{
    name: "Abyssinian",
    description: "The Abyssinian is easy to care for, and a joy to have in your home. They’re affectionate cats and love both people and other animals.",
    dog_friendly: 4,
    energy_level: 5,
    life_span: "14 - 15",
    origin: "Egypt",
    temperament: ["Active", "Energetic", "Independent", "Intelligent", "Gentle"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Abyssinian_(cat)",
    food: {
        favourite_food: "fish",
        medium_liked_food: "dried fruits",
        disliked_food: "walnuts"
    }
},
{
    name: "Aegean",
    description: "Native to the Greek islands known as the Cyclades in the Aegean Sea, these are natural cats, meaning they developed without humans getting involved in their breeding. As a breed, Aegean Cats are rare, although they are numerous on their home islands. They are generally friendly toward people and can be excellent cats for families with children.",
    dog_friendly: 4,
    energy_level: 53,
    life_span: "9- 12",
    origin: "Greece",
    temperament: ["Affectionate", "Social", "Intelligent", "Playful", "Active"],
    wikipedia_url: "https://en.wikipedia.org/wiki/Aegean_cat",
    food: {
        favourite_food: "tuna",
        medium_liked_food: "canned food",
        disliked_food: "all fruits"
    }
},
{
    name: "American Bobtail",
    description: "American Bobtails are loving and incredibly intelligent cats possessing a distinctive wild appearance. They are extremely interactive cats that bond with their human family with great devotion.",
    dog_friendly: 5,
    energy_level: 3,
    life_span: "11 - 15",
    origin: "United States",
    temperament: ["Intelligent", "Interactive", "Lively", "Playful", "Sensitive"],
    wikipedia_url: "https://en.wikipedia.org/wiki/American_Bobtail",
    food: {
        favourite_food: "meaty things",
        medium_liked_food: "tuna",
        disliked_food: "canned food"
    }
}
]

console.log("naam kat 3: ", catBreeds[catBreeds.length - 1].name)
console.log("energieniveau kat 1: ", catBreeds[0].energy_level)
console.log("1e temperament kat 2: ", catBreeds[1].temperament[0])
console.log("laatste temperament kat 3: ", catBreeds[catBreeds.length - 1].temperament[catBreeds[1].temperament.length - 1])
console.log("temperament kat 3: ", catBreeds[catBreeds.length - 1].food.favourite_food)