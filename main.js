NumberButtons = {
  'one': '1',
  'two': '2',
  'three': '3',
  'four': '4',
  'five': '5',
  'six': '6',
  'seven': '7',
  'eight': '8',
  'nine': '9',
}
OperatorButtons = {
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

function pressNumberButton(id){
  displayOutput.innerHTML += NumberButtons[id];
}

function calculate(){
  switch (operation.operator){
    case '+':
      return operation.firstNum + operation.secondNum;
      break;
    case '-':
      return operation.firstNum - operation.secondNum;
      break;
    case '/':
      if (operation.secondNum === 0)
        return 'Undefined';
      return operation.firstNum / operation.secondNum;
      break;
    case '*':
      return operation.firstNum * operation.secondNum;
      break;
  }
}

function clearDisplay(){
  displayOutput.innerHTML = "";
}

var operation = {
  firstNum: 0,
  operator: '',
  secondNum: 0
}

var displayOutput = document.getElementById('display-output');

var equals = getButton('equals');
equals.addEventListener('click', function(){
  operation.secondNum = parseFloat(displayOutput.innerHTML);
  result = calculate();
  displayOutput.innerHTML = result;
  operation.firstNum = result;
});

var clear = getButton('clear')
clear.addEventListener('click', function(){
  clearDisplay();
})

Object.keys(NumberButtons).forEach(function(buttonId){
  var button = document.getElementById(buttonId);
  button.addEventListener('click', function(){
    pressNumberButton(button.id);
  });
});

Object.keys(OperatorButtons).forEach(function(buttonId){
  var button = document.getElementById(buttonId);
  button.addEventListener('click', function(){
    operation.firstNum = parseFloat(displayOutput.innerHTML);
    operation.operator = OperatorButtons[button.id];
    clearDisplay();
  })
});
