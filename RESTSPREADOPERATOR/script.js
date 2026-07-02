// // spread operator
// // example 1 spread with array
// const arr1 = [1, 2, 3];
// const arr2 = [...arr1, 4, 5];

// console.log(arr2); // [1, 2, 3, 4, 5]

// // example 2 with function spread

// function add(a, b, c) {
//     return a + b + c;
// }

// const nums = [10, 20, 30];

// console.log(add(...nums)); // 60

// // example 3 spread with object
// const user = {
//     name: "Kunal",
//     age: 22
// };

// const updatedUser = {
//     ...user,
//     city: "Delhi"
// };

// console.log(updatedUser);


// Destructuring in rest
const arr = [10, 20, 30, 40];

const [first, second, ...rest] = arr;

console.log(first);  // 10
console.log(second); // 20
console.log(rest);   // [30, 40]

// rest in object
const user = {
    name: "Kunal",
    age: 22,
    city: "Delhi",
    country: "India"
};

const { name, age, ...restProps } = user;

console.log(name);     // Kunal
console.log(age);      // 22
console.log(restProps); // { city: "Delhi", country: "India" }  