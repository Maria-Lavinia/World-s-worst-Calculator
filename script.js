"use strict";
window.addEventListener("DOMContentLoaded", settingUp);

  let firstNumber = document.querySelector("#firstnumber").value;
let secondNumber = document.querySelector("#secondnumber").value;
let operatordropDown = document.querySelector("#operator").value;
let decimalsDropDown = document.querySelector("#decimals").value;
let checkBox = document.querySelector("#doround").checked;
let result;
 

function settingUp(){
    console.log("settingUp");

    document.querySelector("#firstnumber").addEventListener("input", readNumbers);
    document.querySelector("#secondnumber").addEventListener("input", readNumbers);
    document.querySelector("#operator").addEventListener("change", readOperator);
    document.querySelector("#calculate").addEventListener("click", calculation);
    document.querySelector("#decimals").addEventListener("change", readDecimals);
    document.querySelector("#doround").addEventListener("change", readCheckBox);
    document.querySelector("#clear").addEventListener("click", clearResult);
}

function readNumbers(){
  console.log("readNumbers");

  firstNumber = Number(document.querySelector("#firstnumber").value);
  secondNumber = Number(document.querySelector("#secondnumber").value);
  
  console.log(firstNumber);
  console.log(secondNumber);
  
}

function readOperator(){
    console.log("readOperator");
    operatordropDown = document.querySelector("#operator").value;
    console.log(operatordropDown);
}

function readCheckBox(){
    checkBox = document.querySelector("#doround").checked;
    console.log(checkBox);
}

function readDecimals(){
    console.log("readDecimals");

    decimalsDropDown = document.getElementById("#decimals").value;
    console.log(decimalsDropDown);
}

function calculation(){
    console.log("calculation");
    if (checkBox === true) {
      result = result.toFixed(decimalsDropDown);
  }

    else if (operatordropDown == "add") {
        result = firstNumber + secondNumber;
    } else if (operatordropDown === "sub") {
        result = firstNumber - secondNumber;
    } else if (operatordropDown === "mul") {
        result = firstNumber * secondNumber;
    } else if (operatordropDown === "div") {
        result = firstNumber / secondNumber;
    }

    showResult();
    
}

function showResult(){
    console.log(result);
    let li = document.createElement("li");
    const resultNote = document.createTextNode(result.toString());

    li.appendChild(resultNote);
    
    document.querySelector("#results").appendChild(li);
    document.querySelector("#results").scrollTo(0, 10000000);
}

function clearResult(){
    console.log("clearResult");

    document.querySelector("#results").innerHTML = "";
}
