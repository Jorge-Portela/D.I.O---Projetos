/*
function oddOrEven(checking) {

     typeNumber = (checking % 2) === 0;

}

oddOrEven(256);

console.log('The number is Odd or Even ?');

if (typeNumber) {
    console.log('The number is Even');
} else {
    console.log('The number is Odd');
}
*/

/*
function sayMyName (name) {

    console.log('Hi! My name is: ' + name);
}

sayMyName('Jorge');
sayMyName(35);
*/

/*
function quadrado(valor) {
    return valor * valor;
}


console.log('A soma do quadrado  é:' + quadrado(7) + quadrado(7));
*/

//-------------------------------------------------------

//para aplicação do desafio 5

function incrementarJuros (valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return (valor + valorDeAcrescimo).toFixed(4);
}

console.log(incrementarJuros(315, 10));