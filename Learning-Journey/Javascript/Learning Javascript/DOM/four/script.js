function addLanguage(langName) {
    const li = document.createElement('li');
    li.innerHTML = `${langName}`
    document.querySelector('.language').appendChild(li)
}

addLanguage('Python')
addLanguage('Typescript')

// basic method. Can have optimisation issue in Large projects.

function addOptiLang(langName) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(langName));
    document.querySelector('.language').appendChild(li);

}

addOptiLang('goLang')

const language = ["ruby", "csharp", "c++", "java"]
for (let index = 0; index < language.length; index++) {
    addOptiLang(language[index])
    
}

// Edit the values

const secondLang = document.querySelector("li:nth-child(2)");
//secondLang.innerHTML = "Mojo" 
const newLi = document.createElement('li');
newLi.textContent = "Mojo"
secondLang.replaceWith(newLi)

// Edit the value
const firstLang = document.querySelector("li:first-child");
firstLang.outerHTML = '<li>C Language</li>'

// Remove

const lastLang = document.querySelector('li:last-child');
lastLang.remove()