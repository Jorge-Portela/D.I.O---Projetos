/*O IMC - Indic de Massa Corporal pe um critério da Organização de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta.

Formula do IMC:
IMC= peso / (altura * altura)

Elabore um algoritmo que dado o peso e altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos condição:
    - Abaixo 18.5 abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obesidade Grave;  
*/

/* 
Abstração:

 Entrada de dados: peso, altura;

 Formula de aritmética: IMC= peso / (altura * altura);
 
 Saída de dados: 
  - Abaixo do peso  (condição: < 18.5 );
  - Peso normal     (condição: = 18.6 && <=24.9);
  - Acima do peso   (condição: >= 25 && <= 29.9);
  - Obeso           (condição: >= 30 && <= 40);
  - Obesidade Grave (condição: > 40);
*/

/*
const peso = 87.58;
const altura = 1.73;

let imc = peso / Math.pow(altura, 2);


console.log('Seu IMC é: ' + imc.toFixed(2));

if (imc < 18.5) {
    console.log('Condição de IMC: Abaixo do peso');
}
else if (imc = 18.6 && imc <= 24.9) {
    console.log('Condição de IMC: Peso normal');
}
else if (imc = 25 && imc <= 29.9) {
    console.log('Condição de IMC: Acima do peso');
}
else if (imc = 30 && imc <= 40) {
    console.log('Condição de IMC: Obeso');
}
else if (imc > 40) {
    console.log('Condição de IMC: Obesidade Grave');
}
*/

function calcularImc(peso, altura) {
    return peso / Math.pow(altura,2);
}

function classificarImc (imc) {

    if (imc < 18.5) {
        return 'Condição de IMC: Abaixo do peso';
    } else if (imc > 18.5 && imc <= 24.9) {
        return 'Condição de IMC: Peso normal';
    } else if (imc > 24.9 && imc <= 29.9) {
        return 'Condição de IMC: Acima do peso';
    } else if (imc > 29.9 && imc <= 40) {
        return 'Condição de IMC: Obeso';
    } else if (imc > 40) {
        return 'Condição de IMC: Obesidade Grave';
    }
} 

function main () {
    const imc = calcularImc(93, 1.87);
    
    console.log('Seu IMC é: ' + imc.toFixed(2));
    console.log(classificarImc(imc));
}

main ();




