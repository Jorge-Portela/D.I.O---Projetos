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
Entrada de dados: precoEtiqueta, tipoPagamento

Processamento: 
1- Á vista Débito: precoEtiqueta - (precoEtiqueta*0.1);
2- Á vista no Dinheiro ou Pix: precoEtiqueta - (precoEtiqueta*0.15);
3- Em 2x: precoEtiqueta;
4- Acima de 2x: precoEtiqueta + (precoEtiqueta*0.1)

Saída de dados: 'Tipo de pagamento:________  | valor Pgo: R$ ' + precoEtiqueta 
*/

/* //Solução 1  - método D.I.O 
function applyDiscount(value, discount) {
    return value-(value *(discount/100));
}

function applyAdd(value, add) {
    return value+(value*(add/100));
}

 const labelPrice = 100;
 const typePayment = 4;


    if (typePayment == 1) {
        console.log(applyDiscount(labelPrice, 10)); 
    } else if (typePayment == 2) {
        console.log(applyDiscount(labelPrice, 15)); 
    }else if (typePayment == 3) {
        console.log(applyDiscount(labelPrice)); 
    }else if (typePayment == 4) {
        console.log(applyAdd(labelPrice, 10)); 
    }

}
*/

// ----------------------------------------------------------------------------

/* //solução 2
function calculateFees(typePayment, labelPrice) {

    if (typePayment == 1) {
        return 'Tipo de Pagamento: desconto 10%  | Valor a ser pago: R$ ' + (labelPrice - (labelPrice*0.1)); 
    } else if (typePayment == 2) {
        return 'Tipo de Pagamento: desconto 15%  | Valor a ser pago: R$ ' + (labelPrice - (labelPrice*0.15)); 
    }else if (typePayment == 3) {
        return 'Tipo de Pagamento: em 2x | Valor a ser pago: R$ ' + (labelPrice);
    }else if (typePayment == 4) {
        return 'Tipo de Pagamento: mais de 2x | Valor a ser pago: R$ ' + (labelPrice + (labelPrice*0.1));
    }
}

console.log(calculateFees(2, 100));
*/

// ----------------------------------------------------------------------------

//solução 3 


function calculateFees(typePayment, labelPrice) {

    if (typePayment == 1) {
        return labelPrice - (labelPrice * 0.1);
    } else if (typePayment == 2) {
        return labelPrice - (labelPrice * 0.15);
    } else if (typePayment == 3) {
        return labelPrice;
    } else if (typePayment == 4) {
        return labelPrice + (labelPrice * 0.1);
    }
}

console.log(calculateFees(2, 100));
