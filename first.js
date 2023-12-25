'use strict';
console.log('Hello There');
console.log('Hifzur Rahman');
console.log('Hifzur Rahman');

// fullName = 'Hello TONY';
// console.log(fullName);
// age = 24;
// console.table(age);

// ECMAScript 2015;

let age = 29;
let fullName = 'Giorgio Infantinno';

let totalPrice = 5000;

console.log(age);
console.log(fullName);
console.log(totalPrice);

// Data Types
/* Non Primitve Data Types */

const student = {
    name: 'Hifzur',
    age: 15,
    enrollmentNo: 1752500021212,
    isPass: true,
};

// age is key and 15 is value

console.table(student);
console.table(student.name);
console.table(student.age);
console.table(student.enrollmentNo);
console.table(student.isPass);
console.table(student['enrollmentNo']);
console.table(student['isPass']);
console.table(student['name']);
console.table(student['age']);
console.table(typeof student);

student['age'] = student['age'] + 5;
console.table(student['age']);

student['name'] = 'Rahman';
console.table(student['name']);
