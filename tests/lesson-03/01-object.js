// 1.
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2021
};

console.log('B1:', car);

// 2.
let person = {
    name: 'Nhi', 
    address: {
        street: 'A',
        city: 'B',
        country: 'C'
    }
}

console.log('B2:', person.address.street);

// 3. 
let student = {
    name: 'Na',
    grades: {
        math: 8,
        english: 9,
    }
}

let mathscore = student["grades"]["math"];
console.log('B3:', mathscore);

// 4.
let settings = {
    volume: '12',
    brightness: '23',
}

settings.volume = '33';
console.log('B4:', settings.volume);

// 5.
let bike = {
    price: 100
}

bike.color = 'blue';
console.log('B5:', bike);

// 6.
let employee = {
    name: 'Nha',
    age: 22
}
delete employee.age;
console.log('B6:', employee);

// 7.
const school = { 
    classA: ["An","Bình","Châu"], 
    classB: ["Đào","Hương","Giang"]
};

