// bind
// const user={
//     name:"kunal",
//     printName:function(city,age){
//         console.log(this.name,city,age)
//     }
// }

// const user2={
//     name:"singh"
// }
// const user3={
//     name:"rana"
// }


// const printName=user.printName.bind(user2,"delhi",22)
// printName()


// apply

// const user={
//     name:"kunal",
//     printName:function(city,age){
//         console.log(this.name,city,age)
//     }
// }

// const user2={
//     name:"singh"
// }
// const user3={
//     name:"rana"
// }


// user.printName.apply(user2,["delhi",22])

// call

const user={
    name:"sahil",
    printName:function(city,age){
        console.log(this.name,city,age)
    }
}

const user2={
    name:"singh"
}


user.printName.call(user2,"delhi",22)


// function currying
function multiply(a,b){
    return a*b

} 
const multiplyByTwo=multiply.bind(this,2)
console.log(multiplyByTwo(5)) // it returns 10


// 
async function getData(baseurl,endpoint){
    const response=await fetch(`${baseurl}${endpoint}`)
    const data=await response.json()
    console.log(data)

}

const getAuthData=getData.bind(null,"https://authservice.com",)
const getFoodData=getData.bind(null,"https://fooddata.com",)
console.log(getAuthData("/login")) // it returns promise pending
console.log(getFoodData("/menu")) // it returns promise pending