const scores = [85, 90, 78];
const ages = [18, 21, 16, 25];
const words = ["apple", "banana", "cherry", "date"];
const numbers = [1, 2, 3, 4];
const expenses = [50, 100, 150];

//4.1
let mapNum = scores.map(a => {
    if (a<90){
        a = a*10/100 + a;
        return a;
    } 
    else {
        a =  a* 95/100;
        return a;
    }
});
console.log(mapNum);

//4.2
let num = numbers.map(number => number.toString());
console.log(num);

//4.3
let num1 = numbers.map(number => number*2);
console.log(num1);
