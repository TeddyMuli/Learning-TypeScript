#!/usr/bin/env ts-node

class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    speak(): void {
        console.log(`${this.name} makes a noise.`);
    }
}

let my_animal = new Animal("ted")
my_animal.speak()