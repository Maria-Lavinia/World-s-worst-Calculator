"use strict";
window.addEventListener("DOMContentLoaded", settingUp);

let firstNumber = document.querySelector("#firstnumber").value;
let secondNumber = document.querySelector("#secondnumber").value;
let operatordropDown = document.querySelector("#operator").value;
let decimalsDropDown = document.querySelector("#decimals").value;
let checkBox = document.querySelector("#doround").checked;
let result;

function settingUp() {
  console.log("settingUp");

  document.querySelector("#firstnumber").addEventListener("input", readNumbers);
  document.querySelector("#secondnumber").addEventListener("input", readNumbers);
  document.querySelector("#operator").addEventListener("change", readOperator);
  document.querySelector("#calculate").addEventListener("click", calculate);
  document.querySelector("#decimals").addEventListener("change", readDecimals);
  document.querySelector("#doround").addEventListener("change", readCheckBox);
  document.querySelector("#clear").addEventListener("click", clearResult);
}

function readNumbers() {
  console.log("readNumbers");

  firstNumber = Number(document.querySelector("#firstnumber").value);
  secondNumber = Number(document.querySelector("#secondnumber").value);

  console.log(firstNumber);
  console.log(secondNumber);
}

function readOperator() {
  console.log("readOperator");
  operatordropDown = document.querySelector("#operator").value;
  console.log(operatordropDown);
}

function readCheckBox() {
  checkBox = document.querySelector("#doround").checked;
  console.log(checkBox);
}

function readDecimals() {
  console.log("readDecimals");

  decimalsDropDown = document.querySelector("#decimals").value;
  console.log(decimalsDropDown);
}

function calculate() {
  console.log("calculate");

  if (operatordropDown === "add") {
    result = Number(document.querySelector("#firstnumber").value) + Number(document.querySelector("#secondnumber").value);
  } else if (operatordropDown === "sub") {
    result = firstNumber - secondNumber;
  } else if (operatordropDown === "mul") {
    result = firstNumber * secondNumber;
  } else if (operatordropDown === "div") {
    result = firstNumber / secondNumber;
  }
  if (checkBox === true) {
    result = result.toFixed(decimalsDropDown);
  }
  if (checkBox === false) {
    result = result;
  }
  showResult();
  readNumbers();
}

function showResult() {
  console.log(result);
  document.querySelector("#firstnumber").value = result;
  let li = document.createElement("li");
  const resultNote = document.createTextNode(result.toString());

  li.appendChild(resultNote);

  document.querySelector("#results").appendChild(li);
  document.querySelector("#results").scrollTo(0, 10);
}

function clearResult() {
  console.log("clearResult");

  document.querySelector("#results").innerHTML = "";
}
