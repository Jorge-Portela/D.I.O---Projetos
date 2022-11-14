/*Faça programa para calcular valor gasto de combustível de uma viagem.

Você terá 3 variáveis. Sendo elas:

1 - Preço do combustível;
2 - Gasto médio de combustível do carro por KM;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustível para realizar esta viagem.*/

const precoCombustivelLitro = 5.79;
const kmPorLitro = 3.78;
const distanciaEmKm = 78;

// execução da lógica//
const litrosConsumidos = distanciaEmKm / kmPorLitro;
const valorGasto = litrosConsumidos * precoCombustivel;

console.log('o valor consumido de combustível para a viagem é de R$ '+ valorGasto.toFixed(2));