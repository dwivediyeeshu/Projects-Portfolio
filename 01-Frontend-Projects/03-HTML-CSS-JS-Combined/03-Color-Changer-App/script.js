const change = () => {
  const input = document.querySelector("#color").value;
  if (CSS.supports("color", input)) {
    document.querySelector("body").style.backgroundColor = input;
  }
  else {
    alert("Invalid Color! Please enter a valid color (e.g. red, #ff0000, rgb(255,0,0))");
  }
};

const button = document.querySelectorAll(".button");
const body = document.querySelector('body')

button.forEach(function (button) {
    button.addEventListener('click', function (event) {
        if(event.target.id === "grey"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "white"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "blue"){
            body.style.backgroundColor = event.target.id
        }
        if(event.target.id === "yellow"){
            body.style.backgroundColor = event.target.id
        }
    })
    
})