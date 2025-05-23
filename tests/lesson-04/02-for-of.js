const numbers = [1, 2, 3];
const str = "Playwright";
const student = { "name": "Alex", "age": 10, "salary": 20 };
const arr = [1, 2, 3, 4, 3, 55, 23];
const dupArr = [1, 2, 3, 1, 2, 4, 5];
//1.2
for (let property of str) {
    console.log(property);
}
//2.2
let rts = [];
for (let property of str) {
    rts.unshift(property);
};
console.log(rts);
//2.3
let index = 1;
let firstIndex = -1;
let lastIndex = -1;

for (let property of arr) {
    if (property === 3) {
        if (firstIndex === -1) {
            firstIndex = index;
            console.log(`Vị trí đầu tiên có gtri 3: ${firstIndex}`);
        }
        lastIndex = index;
    };
    index++;
};
console.log(`Vị trí cuối cùng có gtri 3: ${lastIndex}`);
//2.4
let arr1 = [];
for (let property of dupArr) {
    let a = property;
    let i = 0;
    for (let property1 of dupArr) {
        if (a === property1) {
            i++;
        }
    };
    if (i === 1) {
        arr1.push(a);
    };
};
console.log(arr1);