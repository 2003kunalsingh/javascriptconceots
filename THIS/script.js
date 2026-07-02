// 1st example
console.log(this)

// 2nd example
function myFunction() {
    console.log(this)
}
myFunction()

// 

// 3rd example // it returns  window
// function outer (){
//     let name="kunal"
//      function inner(){  
//         console.log(this)
//      }
//      return inner
// }

// const outers= outer()
// outers()

// 4 it returns undefined
// function outer (){
//     let name="kunal"
//      function inner(){  
//         console.log(this.name)
//      }
//      return inner
// }

// const outers= outer()
// outers()


// 5th example

const user={
    fname:"kunal",
    lname:"singh",
    printFullName:function(){
        console.log(this)
    },
}
user.printFullName() // it returns user object

// 6th example
// const user2={
//     fname:"kunal",  
//     printName:function(){
//         console.log("upper", this)

//         function inner(){
//             console.log("inner", this)
//         }
//         return inner
//     }
// }

// // user2.printName()() // it returns window object because inner function is called in global context
// const x=user2.printName()
// x()


// 7th example
const user2={
    fname:"kunal",  
    printName:function(){
        console.log("upper", this)

       const printAgain =function inner(){
            console.log("inner", this)
        }
         printAgain()
    }
}

user.printName() // it returns window object because inner function is called in global context