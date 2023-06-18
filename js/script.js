"use strict";

const selectButtons = document.querySelectorAll(".btn-select");
const keyboardItems = document.querySelectorAll(".keyboard-item");

selectButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    let currentButton = button;
    let itemId = currentButton.getAttribute("data-btn");
    let currentItem = document.querySelector(itemId);

    selectButtons.forEach(function (button) {
      button.classList.remove("active");
    });
    keyboardItems.forEach(function (button) {
      button.classList.remove("active");
    });
    currentButton.classList.add("active");
    currentItem.classList.add("active");
  });
});
// ---
const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const equalButton = document.getElementById("equal");

const btnOperators = document.querySelectorAll(".operator");

const btnNumbers = document.querySelectorAll(".number");

btnNumbers.forEach((item) => {
  item.addEventListener("click", (e) => {
    let itemText = e.target.textContent;
    console.log(itemText);
  });
});
// function getHistory() {
//   return document.getElementById("history-value").innerText;
// }

// function printHistory(num) {
//   document.getElementById("history-value").innerText = num;
// }

// function getOutput() {
//   return document.getElementById("output-value").innerText;
// }

// function printOutput(num) {
//   if (num == "") {
//     document.getElementById("output-value").innerText = num;
//   } else {
//     document.getElementById("output-value").innerText = getFormattedNumber(num);
//   }
// }

// function getFormattedNumber(num) {
//   if (num == "-") {
//     return "";
//   }
//   var n = Number(num);
//   var value = n.toLocaleString("en");
//   return value;
// }

// // FUNCTION TO CLEAR COMAS IN OUTPUT FIELD
// function reverseNumberFormat(num) {
//   return Number(num.replace(/,/g, ""));
// }

// var operator = document.getElementsByClassName("operator");
// for (var i = 0; i < operator.length; i++) {
//   operator[i].addEventListener("click", function () {
//     if (this.id == "clear") {
//       printHistory("");
//       printOutput("");
//     } else if (this.id == "backspace") {
//       var output = reverseNumberFormat(getOutput()).toString();
//       if (output) {
//         // if output has a value
//         output = output.substr(0, output.length - 1);
//         printOutput(output);
//       }
//     } else {
//       var output = getOutput();
//       var history = getHistory();
//       if (output == "" && history != "") {
//         if (isNaN(history[history.length - 1])) {
//           history = history.substr(0, history.length - 1);
//         }
//       }
//       if (output != "" || history != "") {
//         output = output == "" ? output : reverseNumberFormat(output);
//         history = history + output;
//         if (this.id == "equal") {
//           var result = eval(history);
//           printOutput(result);
//           printHistory("");
//         } else {
//           history = history + this.id;
//           printHistory(history);
//           printOutput("");
//         }
//       }
//     }
//   });
// }

// var number = document.getElementsByClassName("number");
// for (var i = 0; i < number.length; i++) {
//   number[i].addEventListener("click", function () {
//     var output = reverseNumberFormat(getOutput());
//     if (output != NaN) {
//       // if output is a number
//       output = output + this.id;
//       printOutput(output);
//     }
//   });
// }
