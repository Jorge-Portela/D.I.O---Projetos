// Objetos: Em JavaScript, um objeto é uma coleção dinâmica de chave e valor, em que é possível adicionar e remover valores.

/*
Sintaxe:

<tipo_do_objeto> <nome_do_objeto> = {
    <nome_do_parametro_1>: <valor_do_parâmetro>
    <nome_do_parametro_2>: <valor_do_parâmetro>
                    .
                    .
    <nome_do_parametro_n>: <valor_do_parâmetro>
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
 <nome_do_objeto>.<nome_do_parÂmetro> = <valor_do_parâmetro> */

/* Para DELETAR valor basta declarar "delete" com um "espaço" antes do parâmetro a ser deletado sintaxe:
 delete <nome_do_objeto>.<nome_do_parÂmetro> */

const car = {
    name: 'BMW',
    year: 2022,
    model: 'i7 Turbo'
};

car.color='chromed black';
car.fuel='Diesel';

delete car.year;

console.log(car);


