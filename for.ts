#!/usr/bin/env ts-node

const fruits = ['apple', 'banana', 'cherry']
// for ... of loop
// used for arrays
/*
for (let fruit of fruits) {
    console.log(fruit)
}
*/
// for ... in loop
// used for objects

const person: {
    name: string,
    age: number,
    city: string,
    [key: string]: string | number
} = {
    name: "Teddy",
    age: 30,
    city: "Nairobi"
}

for (let key in person) {
    console.log(key, person[key])
}
