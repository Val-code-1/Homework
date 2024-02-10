let colorButton = document.getElementById("colorButton");
function colorShift() {
  let banner = document.getElementById("nameDiv");
  let r = Math.floor(Math.random() * 255);
  let g = Math.floor(Math.random() * 255);
  let b = Math.floor(Math.random() * 255);
  banner.style.background = ["rgb(", r, ",", g, ",", b, ")"].join("");
}
let t = Math.floor(Math.random() * 255);
console.log(t);
colorButton.addEventListener("click", () => colorShift());
