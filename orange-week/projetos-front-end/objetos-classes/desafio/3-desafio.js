/*
Crie uma classe para representar pessoas.
Para cada pessoa teremos os atributos nome, peso e altura.
As pessoas devem ter a capacidade de dizer o valor do seu IMC ( IMC = peso / (altura * altura));
Instancie uma pessoa chamada José que tenha 70kg de peso e 1,75 de altura e peça ao José para dizer o valor do seu IMC; 

  - Abaixo do peso  (condição: < 18.5 );
  - Peso normal     (condição: = 18.6 && <=24.9);
  - Acima do peso   (condição: >= 25 && <= 29.9);
  - Obeso           (condição: >= 30 && <= 40);
  - Obesidade Grave (condição: > 40);
*/

class Person {
    name;
    weight;
    height;
    imc;

    constructor (name, weight, height, imc) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.imc = imc;
        }

}

function rateItImc (personImc) {

    if (personImc.imc < 18.5) {
        return 'Condição de IMC: Abaixo do peso';
    } else if (personImc.imc > 18.5 && personImc.imc <= 24.9) {
        return 'Condição de IMC: Peso normal';
    } else if (personImc.imc > 24.9 && personImc.imc <= 29.9) {
        return 'Condição de IMC: Acima do peso';
    } else if (personImc.imc > 29.9 && personImc.imc <= 40) {
        return 'Condição de IMC: Obeso';
    } else if (personImc.imc > 40) {
        return 'Condição de IMC: Obesidade Grave';
    }
}

const jose = new Person ('José Falconi', 70, 1.75, (70 / Math.pow(1.75,2)) );
console.log(jose);
console.log(rateItImc(jose));

