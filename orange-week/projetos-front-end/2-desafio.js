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

const number = 19;

if((number % 2) ===0 ) {
    console.log('It is a Even Number');
} else {
    console.log('It is a Odd Number');
}
