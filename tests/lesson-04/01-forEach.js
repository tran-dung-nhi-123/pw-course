const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
//1.1
numbers.forEach((value) => {
    console.log(value);
})
//1.2
let total = 0;
let min = numbers[0];
let max = numbers[0];
numbers.forEach((value) => {
    total = total + value;
    if (min > value) {
        min = value;
    }
    if (max < value) {
        max = value;
    }
})
console.log(`Total: ${total}`);
console.log(`Min: ${min}`);
console.log(`Max: ${max}`);
//1.3
// *2
let arrNumbers = [];
numbers.forEach(num => {
    arrNumbers.push(num*2);
})
console.log(arrNumbers);
// Gấp đôi phần tử
let arrNumber = numbers;
numbers.forEach(num1 => {
    arrNumber.push(num1);
})
console.log(arrNumber);


