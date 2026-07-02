function register(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("register sucessfully")
            resolve()

        },2000)
    })
}

function sendEmail(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("email send")
            resolve()

        },2000)
    })
}
function login(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("login successfully")
            resolve()

        },2000)
    })
}
function dataFetched(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data fetched")
            resolve()

        },2000)
    })
}
function dataRecived(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("data recived")
            resolve()

        },2000)
    })
}


register()
.then(sendEmail)
.then(login)
.then(dataFetched)
.then(dataRecived)