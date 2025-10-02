const myObject = {
  js: "Javascript",
  cpp: "C++",
  rb: "Ruby",
  swift: "Swift by Apple",
};

for (const key in myObject) {
  console.log(key);
  console.log(`${key} shortcut is for ${myObject[key]}`);
  
}

const programming = ["js", "rb", "py", "java", "cpp"]

for (const key in programming) {
    console.log(key);
    
}

const map = new Map()
map.set('IN' , "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

for (const key in map) {
    console.log(key);
      
}    // No otuput as map is not iterable in this case

