let inp=document.getElementById("inp")


let timer
function callApi(){
    console.log("Api calling")
}

inp.addEventListener('keypress',(e)=>{
    clearTimeout(timer)
    
    timer=setTimeout(()=>{
        callApi()

    },3000)
})