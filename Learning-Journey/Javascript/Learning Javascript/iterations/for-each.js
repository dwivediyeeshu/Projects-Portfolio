const programming = ["js", "rb", "py", "java", "cpp", "C#"];

programming.forEach(function (val) {
  console.log(val);
});

programming.forEach((item) => {
  console.log(item);
});

function printMe(item) {
  console.log(item);
}

programming.forEach(printMe);

programming.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

const myCoding = [
  {
    languageName: "javascript",
    languageFileName: "js",
  },
  {
    languageName: "C++",
    languageFileName: "cpp",
  },
  {
    languageName: "Java",
    languageFileName: "java",
  },
  {
    languageName: "Python",
    languageFileName: "py",
  },
];

myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
})
