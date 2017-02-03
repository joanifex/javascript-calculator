var CalculationButtons = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
  'add': '+',
  'subtract': '-',
  'multiply': '*',
  'divide': '/',
}

function getButton(name){
  return document.getElementById(name);
}

function setButton(name){
  name.addEventListener('click', function(){
    pressButton(name.id);
  });
}

function pressButton(id){
  displayOutput.innerHTML += CalculationButtons[id];
}

function calculate(){
  result = eval(displayOutput.innerHTML);
  displayOutput.innerHTML = result;
}

function clear(){
  displayOutput.innerHTML = "";
}

var displayOutput = document.getElementById('display-output');
var equals = document.getElementById('equals');
equals.addEventListener('click', function(){
  calculate();
});

Object.keys(CalculationButtons).forEach(function(button){
  var name = document.getElementById(button);
  name.addEventListener('click', function(){
    pressButton(name.id);
  });
});
