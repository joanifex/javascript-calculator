var Buttons =
['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine',
'add', 'subtract', 'multiply', 'divide']

function getButton(name){
  return document.getElementById(name);
}

function setButton(name){
  name.addEventListener('click', function(){
    pressButton(name.id);
  });
}

function pressButton(id){
  switch(id){
    case 'one':
      displayOutput.innerHTML += '1';
      break;
    case 'two':
      displayOutput.innerHTML += '2';
      break;
    case 'three':
      displayOutput.innerHTML += '3';
      break;
    case 'four':
      displayOutput.innerHTML += '4';
      break;
    case 'five':
      displayOutput.innerHTML += '5';
      break;
    case 'six':
      displayOutput.innerHTML += '6';
      break;
    case 'seven':
      displayOutput.innerHTML += '7';
      break;
    case 'eight':
      displayOutput.innerHTML += '8';
      break;
    case 'nine':
      displayOutput.innerHTML += '9';
      break;
    case 'add':
      displayOutput.innerHTML += '+';
      break;
    case 'subtract':
      displayOutput.innerHTML += '-';
      break;
    case 'multiply':
      displayOutput.innerHTML += '*';
      break;
    case 'divide':
      displayOutput.innerHTML += '/';
      break;
  }
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
//
Buttons.forEach(function(button){
  var name = document.getElementById(button);
  name.addEventListener('click', function(){
    pressButton(name.id);
  });
});
