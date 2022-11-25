//Compare a idade de duas pessoas e imprima quem é mais velha utilizando o conceito de classe
class Person  {
    name;
    age;
    yearOfBirth;

    constructor (name, age) {
        this.name = name;
        this.age = age;
        this.yearOfBirth = 2022 - age;
    }

    describe () {
        console.log(`My name is ${this.name} and my age is ${this.age}`);
    }
}

function comparePerson (p1, p2) {
    if (p1.age > p2.age) {
        return `${p1.name} is older than ${p2.name}`;
    } else if (p1.age < p2.age ) {
        return `${p2.name} is older than ${p1.name}`;
    } else {
        return `${p1.name} and ${p2.name} have the same age`;
    }
}

const josh = new Person ('Josh', 25);
const drake = new Person ('Drake', 35);

console.log(comparePerson(josh, drake));

