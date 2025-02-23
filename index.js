/* Desafio classificador de nível de herói
 **O que deve ser utilizado:
    - Variáveis
    - Operadores
    - Laços de repetição
    - Estruturas de decisões

    ## Objetivo:

    Crie uma variável para armazenar o nome e a quantidade de experiência (XP) de um herói, 
    depois utilize uma estrutura de decisão para apresentar alguma das mensagens abaixo:

    Se XP for menor do que 1.000 = Ferro
    Se XP for entre 1.001 e 2.000 = Bronze
    Se XP for entre 2.001 e 5.000 = Prata
    Se XP for entre 6.001 e 7.000 = Ouro
    Se XP for entre 7.001 e 8.000 = Platina Diamante
    Se XP for entre 8.001 e 9.000 = Ascendente
    Se XP for entre 9.001 e 10.000 = Imortal
    Se XP for maior ou igual a 10.001 = Radiante

    ## Saída esperada:
        Ao final deve se exibir uma mensagem:
        "O Herói de nome **{nome}** está no nível de **{nivel}**"

*/

let nomeHeroi = "Escalibu"
let xpHeroi = 1.000

let nivel

if (xpHeroi <1000) {
    nivel = "Ferro"
} else if (xpHeroi <= 2000) {
    nivel = "Bronze"
} else if (xpHeroi <= 5000) {
    nivel = "Prata"
} else if (xpHeroi <= 7000) {
    nivel = "Outro"
} else if (xpHeroi <= 8000) {
    nivel = "Platina Diamante"
} else if (xpHeroi <= 9000) {
    nivel = "Ascendente"
} else if (xpHeroi <= 10000) {
    nivel = "Imortal"
} else {
    nivel = "Radiante"
}

console.log("o Herói de nome " + nomeHeroi + " está no nível de " + nivel)

