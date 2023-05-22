 "Sistema Bancário"

// Desenvolva um programa que pergunte ao usuário
// o número da sua conta bancária e o tipo de operação
// a ser realizada: 1) Saldo 2) Depósito 3) Saque.
// Nas opções de depósito e saque, perguntar o valor
// a ser depositado ou sacado e mostrar o saldo
// atualizado na tela. Na opção saldo, apenas mostrar
// o saldo atual na tela. Considere que um saque só
// pode ser realizado caso haja saldo suficiente.
// Criar uma variável com um valor que represente o
// saldo inicial.



let operacaoEscolhida,numeroConta,saldoConta,valorDeposito,valorSaque

numeroConta = Number(prompt("Digite o número da sua conta: "))

operacaoEscolhida =Number(prompt(`Bem-vindo!
Digite a operação desejada:
(1) SALDO
(2) DEPÓSITO
(3) SAQUE`))

saldoConta = 1000

switch (operacaoEscolhida){ 

    case 1:

      alert("O saldo atual é R$"+ saldoConta)
      break

    case 2:

      valorDeposito = Number(prompt("Qual valor do deposito?"))

      saldoConta = Number(saldoConta + valorDeposito).toFixed(2)

      alert("Depósito efetuado! YEEEEEAH!")
      alert("O saldo atual é R$"+ saldoConta)
      break

    case 3:

          valorSaque = Number(prompt("Qual o valor do saque?"))
      
     if(valorSaque <= saldoConta){

	      saldoConta = (saldoConta - valorSaque).toFixed(2)
	      
	      alert("Saque efetuado! YEEEEEAH!")
          alert("O saldo atual é R$"+ saldoConta)
          break

     }else{

 	      alert("Saldo insuficiente! :(")
          break
       
     }
     

    default:

      alert("Operação inválida!")
      break
}

    