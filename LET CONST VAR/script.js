// coding
// 1
// let var const is a  scopes
if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}

console.log(a); // Works (var is function/global scoped)
// console.log(b); //  Error (let is block scoped)
// console.log(c); //  Error (const is block scoped)

// 2
function outer(){
    let outervar=3
     function inner(){
        let outervar=4
        console.log( "inner scope",outervar) // 4
    }
    inner()

    console.log("outer scope",outervar)
}
outer()

// 3 
const obj={
    name:"kunal",
    lastname:"singh",
    city:"delhi"

}
obj.name="kumar" // allowed
// obj={name:"kumar"} // not allowed

// 4

// console.log(a); //undefined
// var a = 10; 

// 5 
// console.log(ac); //reference error cannot acess a before initialization
// let ac = 20;


// 6
var ac = 5;
function test() {
  console.log(ac);
  var ac = 10;
}
test();