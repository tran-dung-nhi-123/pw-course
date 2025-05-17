// 1.
let sum = 0;
for(let i = 1; i <= 100; i++){
    sum = sum + i;
}
console.log("B1:",sum);

// 2.
console.log("B2:");
for(let i = 2; i <= 9; i++){
    console.log(`Bẳng cửu chương ${i}:`);
    for(let j = 1; j <=10; j++){
        console.log(i,"x",j, "="+(i*j));
    }
}

// 3.
let leArr = [];
for(let i = 1; i <= 99; i++){
    if(i % 2 === 1){
        leArr.push(i);
    }
}
console.log("B3: Mảng số lẻ:", leArr);

// 4.
console.log("B4:");
for(let i = 1; i <= 10; i++){
    console.log(`user${i}@example.com`);
}

// 5.
let Years = [
    {month: 1, total: 100},
    {month: 2, total: 100},
    {month: 3, total: 10},
    {month: 4, total: 30},
    {month: 5, total: 40},
    {month: 6, total: 500},
    {month: 7, total: 600},
    {month: 8, total: 700},
    {month: 9, total: 100},
    {month: 10, total: 220},
    {month: 11, total: 400},
    {month: 12, total: 300},
]

let total = 0;
for(i = 0; i <= 12; i++){
    total = total + i;
}

console.log("B5:",total);

