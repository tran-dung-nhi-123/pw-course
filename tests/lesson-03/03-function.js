// 1.
function multiply(a, b) {
    let n = a * b;
    return n;
}

let n1 = multiply(2, 3);
let n2 = multiply(5, 3);

console.log("B1:", `n1 = ${n1},`, `n2 = ${n2}`);

// 2.
function findMin(a, b, c) {
    if ((a <= b) && (a <= c)) {
        return a;
    }
    else {
        if ((b <= a && b <= c)) {
            return b;
        }
        else return c;
    }
}

let min = findMin(-1, -1, 0);
let min1 = findMin(-3, 5, 0)
console.log(`B2: Min `, min, min1);

// 3.
function getTopStudents(students, threshold) {
    let arr = [];
    for (let i = 0; i < (students.length); i++) {
        if (students[i].score >= threshold) {
            arr.push(students[i].name);
        }
    }
    return arr;
}
let listStudent = [
    { name: "Nhi", score: 9 },
    { name: "Na", score: 10 },
    { Name: "Hà", score: 7 }
]

let Top = getTopStudents(listStudent, 8);
console.log("B3: Top: ", Top);

// 4.
function calculateInterest(principal, rate, years) {
    let total = (principal + principal * rate * years / 100);
    return total;
}

let T = calculateInterest(100, 5, 6);
console.log("B3: Tiền:", T);
