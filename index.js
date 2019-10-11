var answers = [
  "It is certain.",
  "It is decidedly so.",
  "Without a doubt.",
  "Yes - definitely.",
  "You may rely on it.",
  "As I see it, yes.",
  "Most likely.",
  "Outlook good.",
  "Yes.",
  "Signs point to yes.",
  "Reply hazy, try again.",
  "Ask again later.",
  "Better not tell you now.",
  "Cannot predict now.",
  "Concentrate and ask again.",
  "Don't count on it.",
  "My reply is no.",
  "My sources say no.",
  "Outlook not so good.",
  "Very doubtful."
];
var qInput = document.querySelector("#q-input");
var getAnswer = document.querySelector("#get-answer");
var clearBtn = document.querySelector("#clear");
var magicBall = document.querySelector("#magic-ball");
var qRepeat = document.querySelector("#q-repeat");
var randomResult = document.querySelector("#random-result")



// qInput.addEventListener("keyup", btnChange);
getAnswer.addEventListener("click", submitBtn);
clearBtn.addEventListener("click", reset);

// function btnChange () {
//   if (qInput.value != "") {
//     getAnswer.disabled = false;
//     getAnswer.classList.remove = "ga-disable";
//     getAnswer.classList.add = "ga-enable";
//   }
//   else {
//     getAnswer.disabled = true;
//     getAnswer.classList.remove = "ga-enable";
//     getAnswer.classList.add = "ga-disable";
//   };
// }

function submitBtn() {
  if (qInput.value != "") {
    magicBall.classList.remove("reveal");
    magicBall.classList.add("hidden");
    randomResult.classList.remove("hidden");
    randomResult.classList.add("reveal");
    qRepeat.classList.remove("hidden");
    qRepeat.classList.add("reveal");
    randomResult.classList.remove("hidden");
    randomResult.classList.add("reveal");
    clearBtn.classList.remove("clr-disable");
    clearBtn.classList.add("clr-enable");
    qRepeat.innerText = `"${qInput.value}?"`;
    qInput.value = "";
    randomResult.innerText = randomNum();
  }
};

function reset() {
  magicBall.classList.add("reveal");
  magicBall.classList.remove("hidden");
  randomResult.classList.add("hidden");
  randomResult.classList.remove("reveal");
  qRepeat.classList.add("hidden");
  qRepeat.classList.remove("reveal");
  randomResult.classList.add("hidden");
  randomResult.classList.remove("reveal");
  clearBtn.classList.add("clr-disable");
  clearBtn.classList.remove("clr-enable");
}

function randomNum() {
  var randomItem = answers[Math.floor(Math.random() * answers.length)];
  return randomItem;
}