
/*
Uma sala contem 5 alunos e para cada aluno foi sorteado um número de 1-100. Faça um programa que receba os 11 número sorteados para os alunos e mostre o maior número sorteado.

Dados de entrada: 5 10 50 98 23 7 90 99 1 87 33

Saída: 99
*/


const entradas = [5, 10, 50, 98, 23, 7, 90, 99, 1, 87, 33];
let i= 0;

function gets() {
    const valor = entradas[i];
    i++;
    return valor;
}

function print(texto) {
    console.log(texto);
}

module.exports = { gets, print };







