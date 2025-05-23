const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//6.1
let sumScores = scores.reduce((total, num) => total + num, 0);
console.log(sumScores);

//6.2
let mulNum = numbers.reduce((mul, num) => mul * num, 1);
console.log(mulNum);

//6.3
let sumExpenses = expenses.reduce((total, num) => total + num, 0);
console.log(sumExpenses);