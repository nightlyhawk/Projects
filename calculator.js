const operator = prompt('Enter operator ( either +, -, * or /): ');

const value1 = parseFloat(prompt('Enter first value: '));
const value2 = parseFloat(prompt('Enter second value: '));

let result;
if (operator == '+'){
     result = value1 + value2;
}
else if(operator == '-'){
     result = value1 - value2;
}
else if (operator == '*'){
     result = value1 * value2;
}
else{
     result = value1 / value2;
}
console.log('${value1} ${operator} ${value2} = ${result}');
// alert({value1}, {operator}, {value2} = {result})