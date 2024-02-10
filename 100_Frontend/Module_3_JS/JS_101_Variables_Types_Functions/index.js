//link this file you idiot

//DEBUGGING
// console.log("anything we want");

//VARIABLES
var pTag = document.getElementById("replaceThisZero");
console.log(pTag);
// var addButton = document.getElementById("add");
// var subtractButton = document.getElementById("subtract");
var insecureButton = document.getElementById("insecure");

// console.log(addButton);
// addButton.addEventListener("click", () => {
//   pTag.textContent++;
//   // ++ increment
// });

// subtractButton.addEventListener("click", () => {
//   pTag.textContent--;
//   // -- decrement
// });

function add(a, b) {
  pTag.textContent = a + b;
  // return a + b;
}
//OPERATORS
// +
// -
// *
// /
var string1 = "hello";
var string2 = "dustin";
insecureButton.addEventListener("click", () => add(string1, string2));
console.log("hello there");
console.log(string1, string2);

var positive = true;
console.log(positive);
//FUNCTIONS
//declare, arguments, calling
//event listeners
// ++ / --
