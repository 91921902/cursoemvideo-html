


let mesDigitado

mesDigitado = Number(prompt("Digite o número correspondente ao mês: "))


switch(mesDigitado){

    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:   

     alert("O mês possui 31 dias!")
     break

    case 4:
    case 6:
    case 9:
    case 11:       

      alert("O mês possui 30 dias!")
      break

    case 2:

      alert("O mês possui 28 dias!")
      break

    default:

      alert("Número inválido!")
      break
}