let number = document.getElementById("number");
let numberButton = document.getElementById("numberButton");

let x = 1;
let presses = 0;

function getBig() {
  presses++;
  x = presses + x;
  console.log(x + " is x");
  console.log(presses + " is presses");
  number.innerHTML = x;
}

numberButton.addEventListener("click", () => getBig());
