document.body.innerHTML = "ik ben een nieuwe body"
"ik ben een nieuwe body"

let div = document.getElementById('first-section')
console.log(div)
div

let paragraphs = document.getElementsByClassName('paragraph')
console.log(paragraphs)
paragraphs

//geeft de volgende HTML collection: 
// [div#first-section.paragraph, 
// div#second-section.paragraph, first-section: 
// div#first-section.paragraph, second-section: 
// div#second-section.paragraph]

let paragraph = document.getElementsByClassName('paragraph')[0]
//geeft de volgende HTML collection:
//div id=​"first-section" class=​"paragraph">​<p>​Hallo ik ben een paragraaf​</p>​</div>​