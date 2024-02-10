let field1 = document.getElementById("question1");
let field2 = document.getElementById("question2");
let answerButton1 = document.getElementById("answerButton1");
let answerButton2 = document.getElementById("answerButton2");

function answer1() {
  field1.innerHTML = "16";
}
function answer2() {
  field2.innerHTML = "I couldn't read any of that!";
}

answerButton1.addEventListener("click", () => answer1());
answerButton2.addEventListener("click", () => answer2());
