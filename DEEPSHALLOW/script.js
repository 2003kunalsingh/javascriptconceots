// SHAllow copy

// let user={
//     name:"kunal",
//     city:"delhi",
//     state:"noida"
// }

// let user1={...user}
// user1.city="agra"
// console.log("user :",user)
// console.log("user1 :",user1)


// problem with shallow copy
// let user={
//     name:"kunal",
//     address:{
//         city:"jaipur",
//         country:"india"
//     }
// }

// let user1={...user}
// user1.address.city="agra"
// console.log("user :",user)
// console.log("user1 :",user1)


// deep copy

const user = {
    name: "Kunal",
    address: {
        city: "Delhi"
    }
};

const copy = JSON.parse(JSON.stringify(user));
copy.address.city = "Noida";
console.log("user :", user);
console.log("copy :", copy);


