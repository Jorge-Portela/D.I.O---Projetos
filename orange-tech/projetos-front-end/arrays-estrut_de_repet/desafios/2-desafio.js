// 2) Imprima um programa que seja capaz de percorrer um lista de números e imrpima cada número Par encontrado:

const serieNumber = [1,2,3,4,5];

serieNumber.push(6);
serieNumber.push(7);
serieNumber.push(8);
serieNumber.push(9);
serieNumber.push(10);
serieNumber.push(11);

for (let i = 0; i < serieNumber.length; i++) {
       const isNumberEven = serieNumber[i];

       if (isNumberEven % 2 ===0) {
        console.log(isNumberEven);
       }
}