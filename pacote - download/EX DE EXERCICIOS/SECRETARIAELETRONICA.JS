
// 1) Fazer um programa onde o usuário pode acessar
// as seguintes opções:
//
// A) Falar com a atendente B) Falar com o RH
// C) Falar com o gerente D) Sair

// Mostrar mensagens para cada opção!



let opcao


opcao = prompt((`Bem-vindo!
A) Falar com a atendente
B) Falar com o RH
C) Falar com o gerente
D) Sair`)).toUpperCase()


switch (opcao){

    case "A":

      alert("Atendente!")
      break

    case "B":

      alert("RH!")
      break

    case "C":

      alert("Gerente!")
      break

    case "D":

      alert("Tchauuuuuuu!")
      break

    default:

      alert("Você não digitou uma opção válida. Tchau!")
      break
   
}      