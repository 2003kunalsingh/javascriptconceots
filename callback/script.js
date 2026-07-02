// callback


// example 1

// function data(cb){
//     console.log("hi i am data")
//     cb()


// }

// function data2(){
//     console.log("hello i am data2")
// }

// data(data2)


// example 2
// function fetchData(cb){
//     setTimeout(()=>{
//             console.log("data fetched")
//             cb()
//     },3000)
// }

// function dataRecived(){
//     console.log("data received")
// }

// fetchData(dataRecived)



// 1 register
// 2 sendEmail
// 3 login
// 4 data fetched
// data recived

function register(cb){
    setTimeout(()=>{
        console.log("register successfully")
        cb()

    },2000)
}
function sendEmail(cb){
    setTimeout(()=>{
        console.log("email sent")
        cb()

    },3000)
}
function login(cb){
    setTimeout(()=>{
        console.log("login successfully")
        cb()

    },1000)
}
function dataFetched(cb){
    setTimeout(()=>{
        console.log("Data fetching")
        cb()

    },2000)
}
function dataRecived(){
    setTimeout(()=>{
        console.log("Data Recived")
        

    },1000)
}

register(function(){
    sendEmail(function(){
        login(function(){
            dataFetched(function(){
                dataRecived()
            })
        })



    })


})
console.log("application worked")