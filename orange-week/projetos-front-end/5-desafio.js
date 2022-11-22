/*
Elabore um algoritmo que calcule o que deve ser pago por um produto,  considerando o preço normal de etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- Á vista Débito, recebe 10% de desconto;
- Á vista no Dinheiro ou Pix, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

/*
Abstração:

Entrada de Dados: valorProduto, tipoPagamento;

Condições:
1 - Á vista Débito: valorProduto - (valorProduto/10);
2 - Á vista no Dinheiro ou Pix: valorProduto - (valorProduto/15); 
3 - Em duas vezes: valorProduto;
4 - Acima de duas vezes: valorProduto + (valorProduto/10);
*/

//código de tipo de pagamento: 1 - à vista débito; 2-à vista dinheiro ou pix; 3-parcelo 2x; 4-parcelado acima de 2x.

let valorProduto = 100;

const tipoPagamento = 4;

if (tipoPagamento == 1) {
    console.log((valorProduto - (valorProduto * 0.10)).toFixed(2)); // Á vista Débito, recebe 10% de desconto
}
else if (tipoPagamento == 2) {
    console.log(valorProduto - (valorProduto * 0.15).toFixed(2)); // Á vista no Dinheiro ou Pix, recebe 15% de desconto
}
else if (tipoPagamento == 3) {
    console.log(valorProduto.toFixed(2)); // Em duas vezes, preço normal de etiqueta sem juros
}
if (tipoPagamento == 4) {
    console.log((valorProduto + (valorProduto * 0.1)).toFixed(2)); // Acima de duas vezes, acréscimo juros de 10%
}


