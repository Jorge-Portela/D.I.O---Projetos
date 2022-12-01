//  Escreva uma funções que verifique se o usuário é maior de idade:

/*
entrada de dados: idade (numérico + string)

processamendo: 
isYourAge 

classifiedAge
< 18 : usuário menor de idade;
>= 18 : usuário maior de idade;

saída de dados: 
User is adult
User is not adult
*/ 

function classifiedAge(age) {

    console.log('User age is: ' + age);

    if(age >=18) {
        return 'User is of legal age.';
    } else {
        return 'User is NOT of legal age.';
    }
} 

console.log(classifiedAge(14));




