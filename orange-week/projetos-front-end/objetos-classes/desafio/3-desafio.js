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

    calculateImc () {
        return  this.weight / Math.pow(this.height,2)
    }
    

    constructor (name, weight, height, imc) {
        this.name = name;
        this.weight = weight;
        this.height = height;
        }

        rateItImc () {
            const imc = this.calculateImc();
            if (imc < 18.5) {
                return 'Condição de IMC: Abaixo do peso';
            } else if (imc > 18.5 && imc <= 24.9) {
                return 'Condição de IMC: Peso ideal';
            } else if (imc > 24.9 && imc <= 29.9) {
                return 'Condição de IMC: Acima do peso';
            } else if (imc > 29.9 && imc <= 40) {
                return 'Condição de IMC: Obeso';
            } else if (imc > 40) {
                return 'Condição de IMC: Obesidade Grave';
            }
        }
}

// uma função é sempre fora da classe, enquanto os métodos estão inseridos dentro da classe!!!
const jose = new Person ('José Otávio', 90, 1.80);
console.log(jose);
console.log('Seu IMC é: ' + jose.calculateImc().toFixed(1));
console.log(jose.rateItImc());

