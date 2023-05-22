
// Numa competição de arremesso de peteca, o
// competidor tem direito a 3 arremessos para que
// a peteca caia em um alvo com áreas e pontuações
// de 0 a 5, sendo 5 no centro e 0 fora do alvo.
// Faça um programa que pergunte a pontuação de cada
// arremesso e ao final mostre o resultado (soma dos
// pontos) e a classifição: 15 pontos (deus da peteca),
// de 14 a 10 (petequeiro profissa), de 9 a 5
// (petequeiro de final de semana), de 4 a 1
// (pseudo-petequeiro) e 0 pontos (nunca petequeiro).




let somaPontos, pontuacaoArremessoUm,pontuacaoArremessoDois,pontuacaoArremessoTres

somaPontos = 0

pontuacaoArremessoUm = Number(prompt("Digite a pontuação do arremesso 1: "))

pontuacaoArremessoDois = Number(prompt("Digite a pontuação do arremesso 2: "))

pontuacaoArremessoTres = Number(prompt("Digite a pontuação do arremesso 3: "))

somaPontos = Number(pontuacaoArremessoUm + pontuacaoArremessoDois + pontuacaoArremessoTres).toFixed(0)

alert("Sua pontuação: " + somaPontos)

   switch (true){
   
        case somaPontos ==15:
        
             alert("Você é o DEUS da peteca!")
             break
            
        case somaPontos >= 10 && somaPontos <= 14:
                     
             alert("Você é o petequeiro PROFISSA!")
             break
            
        case somaPontos >=5 && somaPontos <=9:
              
             alert("Você é o petequeiro DE FIND!")
             break
            
        case somaPontos >=1 && somaPontos <=4:
              

            alert("Você é o PSEUDO-petequeiro!")
            break
            
        case somaPontos == 0:
        
            alert("Você é o NUNCA petequeiro!")
            break

        default:
        
            alert("Você INVENTOU uma pontuação!")
            break
   }     
        