// const obj = {
//     name: "Ahad",
//     age: 40,
//     address: "xyz",
//     designation: "Teacher",
//     greet: function(){
//         console.log(Hello! ${this.name}. how are you?); 
//     }
// }

// obj.name = "Hassan";
// obj.country = "Pakistan"

// // document.writeln(obj.greet())
// console.log(obj);

// const person = {
//     name: "Waqar",
//     age: 40,
//     address: {
//         street: 45,
//         city: "Karachi",
//         area: "xyz",
//         country: "Pakistan"
//     },
//     contactInfo: {
//         number: 6578578,
//         email: "xyz"
//     },
//     image: "jdfhshfsldhflkhdfskl",
//     intro: function(){
//         console.log(This is ${this.name}. I am from ${this.address.city});

//     }
// }
// person.address.street = 60

// console.log(person.intro());

// // Copies properties from a source object to a target object
// Object.assign(target, source)

// // Creates an object from an existing object
// Object.create(object)

// // Returns an array of the key/value pairs of an object
// Object.entries(object)

// // Creates an object from a list of keys/values
// Object.fromEntries()

// // Returns an array of the keys of an object
// Object.keys(object)

// // Returns an array of the property values of an object
// Object.values(object)

// // Groups object elements according to a function
// Object.groupBy(object, callback)

// const obj = {
//     name: "Ahad",
//     age: 56,
//     location: "Karachi"
// }

// document.writeln(obj)

// for(const key in obj){
//     document.writeln(${key}: ${obj[key]} + "<br>")
// }

// const arryOfObj = [
//     {
//         id: 1,
//         title: "Product 1"
//     },
//     {
//         id: 2,
//         title: "Product 2"
//     },
//     {
//         id: 3,
//         title: "Product 3"
//     },
// ]

// const arr = ["Waqar", "Ahmed", "Ahad"];

// for(const obj of arryOfObj){
//     console.log(obj.title);
// }


// const name = "waqar";
// name = "Ahmed";

// console.log(name);

// const arr = ["Waqar", "Ahmed"];
// console.log(arr);

// arr.push("Hamza")

// console.log(arr);

// arr = ["Ahad"]

// console.log(arr);

// const obj = {
//     name: "waqar",
//     age: 30
// }

// obj.country = "Pakistan";

// console.log(obj);

// obj = {}


// Higher order functions

// threads

// const arr = [1, 2, 3, 65, 56, 78, 89];
// const arr2 = arr.map((element) => {
//     return element * 2;
// })

// console.log(arr2);
// console.log(arr);

// const arr2 = arr.map((element, index, array) => {
//     console.log(`Index: ${index}| value: ${element} | Original Array ${array} `);
// })

// const arr2 = arr.map((element) => element * 2 )
// const arr2 = arr.map(element => element * 2 )


// const arryOfObj = [
//     {
//         id: 1,
//         title: "Product 1"
//     },
//     {
//         id: 2,
//         title: "Product 2"
//     },
//     {
//         id: 3,
//         title: "Product 3"
//     },
//     {
//         id: 3,
//         title: "Product 3"
//     },
// ]

// const filteredObjs = arryOfObj.filter((obj) => {
//     if (obj.id === 3) {
//         return obj
//     }
// })
// console.log(filteredObjs);

// const filteredObjs = arryOfObj.filter(obj => obj.id === 4)
// console.log(filteredObjs);


const arryOfObj = [
    {
        id: 1,
        title: "Product 1",
        author: "Ahad"
    },
    {
        id: 2,
        title: "Product 2",
        author: "Hamza"
    },
    {
        id: 3,
        title: "Product 3",
        author: "Waqar"
    },
    {
        id: 3,
        title: "Product 4",
        author: "Waqar"
    },
]

// const isFound = arryOfObj.find((obj) => {
//     // if(obj.author === "gfdg") return obj;
//     return obj.author === "Waqar"
// })

// const isFound = arryOfObj.find(obj => obj.author === "Waqar")

// console.log(isFound);

// const a = arryOfObj.forEach((obj) => console.log(obj.author)
// )

// console.log(a);