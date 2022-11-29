/* 
const player = 'Otávio Mesquita';

for (let i = 0; i < player.length; i++) {
    const letter = player[i];
    console.log(letter);   
}
*/

/*
Exercício de exemplo: Cria uma lista vazia e insira notas de alunos, e depois faça um estrutura de repetição para percorrer a lista e realize uma média para encontrar a nota média
*/

const grade = [];

grade.push(5);
grade.push(7);
grade.push(9);
grade.push(10);
grade.push(7.9);
console.log(grade)

let sum = 0;

for (let i = 0; i < grade.length; i++) {
    const grades = grade[i];

    sum = sum + grades; 
}

const media = sum/grade.length;
console.log(media);