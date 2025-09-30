// Immediately Invoked Function Expressions (IIFE)

(function chai() {
    console.log(`DB CONNECTED`);
    
})();                   // ; - is important or else both iife function will not work because of scope
// named IIFE


//chai();

((name) => {
    console.log(`DB Connected two ${name}`);
    
}) ('yeeshu')

// unnamed IIFE
//(function )(function call)

/*
*To avoid polluting the global scope.
*Variables inside IIFE are scoped locally so they dont interefere with variables in global scope.
* Encapsulation/Data Privacy
*Intialization code
*Modular pattern(before ES6 modules)
*Before import/export existed, IIFEs were heavily used to structure code into independent modules. 

*/