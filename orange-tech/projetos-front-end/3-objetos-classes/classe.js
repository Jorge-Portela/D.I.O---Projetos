//Classe: É a definição que caracteriza e parametriza os objetos de modo geral


class vehicle {
    type;
    model;
    madeYear;

    constructor (type, model, year) {
        this.type = type;
        this.model = model;
        this.madeYear = 2022 - year;
    }

    detail() {
        console.log(`My vehicle is ${this.type}, its model is ${this.model} and its year is ${this.year}`);
    }
}

// Instância: É a ocorrência da classe(nesse caso: vehicle)

const bmw = new vehicle ('bmw', 'suv',5);
    /*bmw.type = 'suv';
    bmw.model = 'i7';
    bmw.year = 2022;*/

const audi = new vehicle ('audi', 'coupe', 9);
    /*audi.type = 'coupe';
    audi.model = 'R8';
    audi.year = 2017;*/


// Ao chamar uma função, deve adicionar () no final!!!!!!
/*bmw.detail();
audi.detail();*/

console.log(bmw);
console.log(audi);