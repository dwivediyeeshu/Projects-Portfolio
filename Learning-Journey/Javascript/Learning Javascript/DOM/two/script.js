const parent = document.querySelector('.parent')
console.log(parent);
console.log(parent.children);   // HTMLCollection
console.log(parent.children[1].innerHTML);  // inner HTML value

for (let index = 0; index < parent.children.length; index++) {
    console.log(parent.children[index].innerHTML);
    
}

parent.children[1].style.color = "Orange"

console.log(parent.firstElementChild);
console.log(parent.lastElementChild);


const dayOne = document.querySelector('.day')
console.log(dayOne);

console.log(dayOne.parentElement);
console.log(dayOne.nextElementSibling);  // full html of tuesday with the new styling

console.log("NODES: ", parent.childNodes);   //Nodelist(9) 
// if we add comment in the children like a comment. the output will be Nodelist(11)







