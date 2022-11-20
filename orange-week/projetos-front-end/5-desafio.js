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
- Á vista Débito: valorProduto - (valorProduto/10);
- Á vista no Dinheiro ou Pix: valorProduto - (valorProduto/15); 
- Em duas vezes: valorProduto;
- Acima de duas vezes: valorProduto + (valorProduto/10);
*/

//código de tipo de pagamento: 1 - à vista débito; 2-à vista dinheiro ou pix; 3-parcelo 2x; 4-parcelado acima de 2x.

let valorProduto = 50.99;

const tipoPagamento = 4;

if (tipoPagamento == 1) {
    let valorFinalProduto = valorProduto - (valorProduto * 0.10);
    console.log('Valor pago: R$ ' + valorFinalProduto.toFixed(2));
} 
else if (tipoPagamento == 2) {
    let valorFinalProduto = valorProduto - (valorProduto * 0.15);
    console.log('Valor pago: R$ ' + valorFinalProduto.toFixed(2));
} 
 else if (tipoPagamento == 3) {
    let valorFinalProduto = valorProduto;
    console.log('Tipo de Pagamento: em 2x | Valor pago: R$ ' + valorFinalProduto.toFixed(2)); 
}
else if (tipoPagamento ==4) {
    let valorFinalProduto = valorProduto + (valorProduto * 0.10);
    console.log('Tipo de Pagamento: mais de 2x | Valor pago: R$ ' + valorFinalProduto.toFixed(2)); 
}


