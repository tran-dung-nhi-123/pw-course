const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//2.1
let evenNum = scores.filter(num => num > 80);
console.log(evenNum);

//2.2
let evenAge = ages.filter(age => age >= 18);
console.log(evenAge);

//2.3
let evenWord = words.filter(l => l.length > 5);
console.log(evenWord);