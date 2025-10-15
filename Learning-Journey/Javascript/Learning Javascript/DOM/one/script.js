document.getElementById("title").addEventListener("click", function () {
    document.getElementById("title").style.backgroundColor = 'red'
    document.getElementById('title').style.padding = "15px"
    document.getElementById('title').style.borderRadius = "10px"

    document.getElementById("title").textContent = "Hello World testing event listener"
});

//console.log(document.querySelector('h2'))

const myul = document.querySelector('ul')
const myLi = myul.querySelector('li')

myLi.addEventListener("click", function () {
    myLi.style.backgroundColor = "green"
    myLi.style.padding = "10px"
    myLi.innerText = "five"
})

const ulList = document.getElementsByClassName('list-item')  //  gives html element type

const convArray = Array.from(ulList) // to convert htmlElement type to Array
    convArray.forEach((li) => {
        li.style.color = "orange"
    })

