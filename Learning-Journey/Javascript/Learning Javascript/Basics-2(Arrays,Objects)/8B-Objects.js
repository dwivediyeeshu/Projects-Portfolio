//const instaUser = new Object(); //singleton object
const instaUser = {}; // non - singleton object

instaUser.id = "123abc"
instaUser.name = "John"
instaUser.isLoggedIn = false

console.log(instaUser);

const regularUser = {
    email: "john@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Yeeshu",
            lastname: "Dwivedi"
        }
    }
}

console.log(regularUser.fullname.userfullname.firstname);   // to call a specific value in nested object

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // similar problem like array. stores as 2 objects
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2}
// console.log(obj3);


const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(instaUser);

// console.log(Object.keys(instaUser));
// console.log(Object.values(instaUser));
// console.log(Object.entries(instaUser));

// console.log(instaUser.hasOwnProperty('isLoggedIn'));


/*---------- Objects Destructuring -------------*/

const course = {
    coursename: "JS",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

//console.log(courseInstructor);

console.log(instructor);