const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
//3.1
console.log(`B1:`);
for (let property in student) {
    console.log(property);
};
//3.2
console.log(`B2:`);
let total = 0;
for (let property in student) {
    if (typeof student[property] === 'number') {
        total = total + student[property];
    }
};
console.log(total);
//3.3
let arrTT = [];
for (let property in student) {
    arrTT.push(property);
};
console.log(arrTT);