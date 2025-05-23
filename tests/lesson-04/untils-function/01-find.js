const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//3.1
let evenNum = scores.find(num => num > 80);
console.log(evenNum);

//3.2
let evenAge = ages.find(age => age > 20);
console.log(evenAge);

//3.3
let evenWord = words.find(l => l.length > 5);
console.log(evenWord);