// Base Class
export class Animal {
    age: number;
    legs: number;
    name: string;

    constructor(age: number, legs: number, name: string) {
        this.age = age;
        this.legs = legs;
        this.name = name;
    }
}

// Child / Derived Class
export class Dog extends Animal {
    woof(): string {
        return "WOOF !!! WOOF !!!";
    }

}
const dog = new Dog(2, 4, 'Puppy');
console.log(dog.name);
console.log(dog.woof());

export class Cat extends Animal {
    meow(): string {
        return "MEOW !!! MEOW !!!";
    }
}
const cat = new Cat(3, 4, 'Meow');
console.log(cat.name);
console.log(cat.meow());