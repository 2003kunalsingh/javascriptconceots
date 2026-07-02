// 1 event capturing
// parent.addEventListener("click", () => {
//   console.log("parent");
// });

// child.addEventListener("click", () => {
//   console.log("child");
// });

// / 2 event bubbling
parent.addEventListener("click", () => {
  console.log("parent");
},true);

child.addEventListener("click", () => {
  console.log("child");
},true);
