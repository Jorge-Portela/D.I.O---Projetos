/*listas: São objetos utilizados para armazenar uma coleção de múltiplos itens sobre o nome de uma única variável. por: mdn mozilla. */


/* podemos criar uma listas utilizando a sintaxe por um conjunto de colchetes "[]" e virgula para separar as posições os valores contidos nessa lista. A lista funciona como um diretório, onde os valores nela contidos são organizados por  índices, em que a sua primeira posição é o "0". No exemplo abaixo temos uma lista com 3 valores(strings) embutidos e a posição-0(primeira posição):john, posição-1(segunda posição): mike e a posição-2(terceira posição): kyra. */

const student = ['john', 'mike', 'kyra'];

/* E para imprimir o valor desejado desa lista, basta utilizar a sintaxe: <nome_do_objeto> [número_da_posição/índice] */
console.log(student[2]);

/* No caso de selecionarmos uma posição qual não tenha valor atribuído, teremos  o valor "undefined" como resposta */
console.log(student[3]);

/* Podemos inserir,deletar e substituir os valores das lista de um objeto utilizando as seguintes sintaxes:*/

/* Adicionar valores: <nome_do_objeto>.push(novo_valor) ou <nome_do_objeto>[posição_do_novo_valor] =(novo_valor) */
student.push('maria');
student[5] = 'bryan';
console.log(student);

/*Também podemos substituir um valor do objeto selecionando o índice qual deseja trocar e o novo valor que será incluído: Neste exemplo iremos inserir um novo valor('tony') no lugar da posição-0 ('john') da lista */
student[0] = 'tony';
console.log(student);

/* Uma lista pode ser criada sem valores e ser preenchida com valores posteriormente:*/
const car = [];
car.push('BMW');
console.log(car);

/* Uma lista pode armazenar diferentes tipos(numéricos, string e etc) de valores*/
const address = ['builden', 153, 2 !== 0];
console.log(address);

/*Para retirar um certo valor de um lista, podemos utilizar o método ".pop": ele retira o valor e o imprime separadamente na próxima linha*/

const animals = ['cat', 'dog', 'lion', 'bear'];
console.log(animals);
console.log(animals.pop());
console.log(animals);

console.log();

/*Caso inserimos o método ".pop" sem um posição definida, ele irá retirar a última posição da lista*/
const color = ['red', 'blue', 'orange', 'brown'];
console.log(color);
console.log(color.pop());
console.log(color);

console.log();

/* Para retirar o valor da primeira posição e mostrá-lo podemos utilizar o método ".shift" */
const number = [10, 35, 146, 97];
console.log(number);
console.log(number.shift());
console.log(number);

console.log();

/* Para retirar valores de modo mais dinâmico  podemos utilizar o método ".splice(p, n)", onde p = posição que iniciará o processo de deltar e n = quantidades de elementos deletados. */
const brand = ['nike', 'adidas', 'puma', 'hermes'];
console.log(brand);
brand.splice(1, 3);
console.log(brand);




