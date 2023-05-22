
// Em um determinado e-commerce, o frete para produtos
// possui o valor fixo de R$12. A loja possui
// benefícios para assinantes em três categorias:
// 1) Assinante Premium, ganha 20% de desconto e
// frete grátis 2) Assinante Gold, ganha 20% de
// desconto mas paga frete 3) Assinante Silver,
// ganha 10% de desconto mas paga frete. 4) Não
// assinante, sem benefícios. Faça um programa que
// solicite o valor da compra e a categoria de
// assinante (1, 2, 3 ou 4). Mostrar na tela o
// valor da compra de acordo com a opção escolhida.


let valorCompra,valorFrete,valorDesconto,valorTotal,opcaoAssinatura

valorCompra = Number(prompt("Digite o valor da compra: "))

opcaoAssinatura =Number(prompt(`Planos de assinatura:
(1) Assinante Premium
(2) Assinate Gold
(3) Assinante Silver
(4) Não Assinante`))

valorFrete = 12

switch (opcaoAssinatura){

   case 1:

      valorDesconto = ((valorCompra * 20) / 100)
      valorTotal = (valorCompra - valorDesconto).toFixed(2)

      alert("Total a pagar R$"+ valorTotal)
      break

   case 2:

      valorDesconto = ((valorCompra * 20) / 100)
      valorTotal = ((valorCompra - valorDesconto) + valorFrete).toFixed(2)

      alert("Total a pagar R$" + valorTotal)
      break

   case 3:

      valorDesconto = ((valorCompra * 10) / 100)
      valorTotal = ((valorCompra - valorDesconto) + valorFrete).toFixed(2)

      alert("Total a pagar R$"+ valorTotal)
      break


   case 4:

      valorTotal = (valorCompra + valorFrete).toFixed(2)
      alert("Total a pagar R$"+ valorTotal)
      break

   default:

      alert("Número de assinatura inválido!")
      break
}