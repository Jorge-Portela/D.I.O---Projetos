/* 
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustível por Kilometro rodado.
Crie um método que dado a quantidade de quilômetros e o preço do combustível nos dê o valor gasto em reais para realizar este percurso.
*/

/*
Absstração:

entrada de dados: class(brand, color,kmDriven), fuelPrice, avgConsKm;

processamento:
1-Criar uma classe com uma função com a expressão para calcular o consumo médio e imprimir na tela junto aos objetos.
2-Criar um constructor para receber os valores dos dados da classe e atribuir uma expressão;
3-Expressão: (kmDriven/avgConsKm) * fuelPrice = routeCost;
4 - function para mostras os dados do carro e custo do trajeto.

saída de dados: dados do carro e custo do trajeto.
*/

class car {
    brand;
    color;
    avgCostKm;
   
    constructor (brand, color, avgCostKm) {
        this.brand = brand;
        this.color = color;
        this.avgCostKm = avgCostKm;
        //console.log(`The route cost of of the car ${this.brand} color ${this.color} is R$ ${calculateRouteCost(return)}.`);
    }
    
    calculateRouteCost (kmDriven, fuelPrice) {
        return (kmDriven*this.avgCostKm) * fuelPrice;
        
    }
}

const bmw = new car('BMW', 'Dark Blue',5.12/12);
console.log(bmw.calculateRouteCost(70,5.12).toFixed(2));

const logan = new car('Renault', 'Silver', 5.12/9);
console.log(logan.calculateRouteCost(97, 5.12));






