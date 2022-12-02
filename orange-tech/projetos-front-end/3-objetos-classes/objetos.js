
// Objetos: Em JavaScript, um objeto é uma coleção dinâmica de chave e valor, em que é possível adicionar e remover valores.

/*
Sintaxe:

<tipo_do_objeto> <nome_do_objeto> = {
    <nome_da_chave_1>: <valor_da_chave>
    <nome_da_chave_2>: <valor_da_chave>
                    .
                    .
    <nome_da_chave_n>: <valor_da_chave>
}

Exemplo: 

const jorge = {
    name: 'jorge F. Portela'
    age: 27
    stack: 'JavaScript'
};

console.log(jorge.name);
console.log(jorge.age);
console.log(jorge.stack)
*/


/* Ao incrementar um novo parâmetro para um objeto, deve seguir com a seguinte sintaxe:
 <nome_do_objeto>.<nome_da_chave> = <valor_da_chave> */

/* Para DELETAR valor basta declarar "delete" com um "espaço" antes da chave que será deletada da sintaxe:
 delete <nome_do_objeto>.<nome_da_chave> */

 /* this:  */
 /*  Template String => ${}: Responsável por criar Strings substituindo espaço reservados */
/*Ordem: sempre se atentar para ordem ao declarar um novo valor para objetos e funções. Pois o compilado irá considera quem vem antes do último. */
const car = {
    name: 'BMW',
    year: 2022,
    model: 'i7',

    detail: function () {
        console.log(`My car is ${this.name} and it year's is ${this.year}`);
    }
};

// adicionando novos valores ao objeto:
car.color='Chrome Black',
car.fuel='diesel';

// trocando os valores do objeto:
car.name = 'Audi';
car.model = 'R8';

car.detail = function() {
    console.log(`My car is ${this.name} and its model is ${this.model}`);
}

//deletar um valor do objeto:
delete car.model;

//chamando a função desse objeto:
car.detail();

//Outro modo de acessar um objeto usando colchetes []:
console.log(car['name']);
car['name'] = 'test';










