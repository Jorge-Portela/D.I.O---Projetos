/*
Faça um algoritmo que dada as 3 notas de um semestre de um aluno universitário, calcule e imprima a sua média e sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) /3;

Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre; 
    */

//Initial Algorithm:

let firstGrade = 7.89;

let secondGrade = 7;

let thirdGrade = 7;

let isGradeMedia = (firstGrade + secondGrade + thirdGrade) / 3;

if (isGradeMedia < 5) {
    console.log('Fail.');
} else if (isGradeMedia = 5 && isGradeMedia <= 7 ) {
    console.log('Summer School.');
} else {
    console.log('Approved!');
}




