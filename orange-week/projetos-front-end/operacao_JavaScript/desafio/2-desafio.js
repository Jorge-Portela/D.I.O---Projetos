//Condicionais//

//Operador Aritmético % //

/*const numero = 11;

const restoDivisao = numero % 2;

console.log('O resto dessa divisão é: '+restoDivisao);*/

/*---------------------------------------------------*/

//Verifique se um dado numéro é Par//

/*const numero = 25;

const numeroDivisivelPor5 = (numero % 2) === 0;

if(numeroPar){
    console.log('Sim');
}else{
    console.log('Não');
}*/

/*negação de "IF"//
if(!numeroPar){
    console.log('É Impar');
}*/

/*---------------------------------------------------*/

//Verifique se um dado número é divisível por 5 e que em caso de divisão por zero seja resultado inválido//

/*const numero = 36;

const divisivelPor5 = (numero % 5) === 0;

if(numero === 0) {
    console.log('Resultado inválido');
} 
else if(divisivelPor5) {
    console.log('É divisível por 5');
} 
else {
    console.log('Não é divisível por 5');
}*/

/*---------------------------------------------------*/

//Método com menos linhas

/*const number = 19;
const isNumberEven = (number % 2) ===0;

if(isNumberEven) {
    console.log('It is a Even Number');
} else {
    console.log('It is a Odd Number');
}*/

/*---------------------------------------------------*/
/*Verifique se um dado número é divisível por 5 e que em caso de divisão por zero seja resultado inválido*/

/*const number = 0;

const isDivisibleFor5 = (number % 5) === 0;

if (number ===0) {
    console.log('Invalid Divider')
} else if (isDivisibleFor5) {
    console.log('This number is divisible for 5')
} else {
    console.log('This number IS NOT divisible sor 5');
} */

/*---------------------------------------------------*/

// Faça um programa para calcular o valor de uma viagem:

/* Você terá 5 variáveis. Sendo elas:
       1 - Preço do Etanol;
       2 - Preço da Gasolina;
       3 - O tipo de combustível que está no seu carro;
       4 - Gasto médio do combustível por KM;
       5 - Distância em KM da viagem;

   Imprima no console o valor que será gasto para realizar esta viagem.*/

// fuel code: etanol - 1 / gas -2

const typeFuel = 0;

const etanolPrice = 2.8111; //Brasil Average Value  Date:12/11/2022 According CEPEA - USP
const gasPrice = 5.02; // Brasil Average Value  Time Interval: 06/11/2022 - 12/11/2022 According Petrobras
const kmPerLiter = 15.7;
const kmTraveled = 73;

const isAvgEtanolCost = (kmTraveled / kmPerLiter) * etanolPrice;
const isAvgGasCost = (kmTraveled / kmPerLiter) * gasPrice;

if (typeFuel == 1) {
    console.log('The price of fuel to this travel is R$' + isAvgEtanolCost.toFixed(4));
} else if (typeFuel == 2) {
    console.log('The price of fuel to this travel is R$' + isAvgGasCost.toFixed(4))
} else {
    console.log('Invalid type of fuel. Please, insert 1 - etanol or 2 - gas')
}




