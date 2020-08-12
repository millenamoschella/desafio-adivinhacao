/*

DESAFIO

Criar um jogo no qual o jogador tenha que adivinhar
um número.O jogo deve gerar um número aleatório entre 1 e 100, e depois desafiar o jogador a descobrir qual o número em máximo 10 tentativas. A cada tentativa, caso o jogador não tenha acertado o número, o jogo deve informar se o número informado é maior ou menor que o sorteado. O jogo termina se o jogador acertar o número ou acabarem as tentativas

PASSOS 

1º passo - Gerar um número aleatório entre 1 e 100
2º passo - Inicializar o número de tentativas como 10
3º passo - Pedir ao jogador a adivinhar o número
4º passo - Decrementar o número de tentativas
5º passo - Verificar se a tentiva está certa
6º passo - Se estiver correta:
        - Informara que acertou o número
        - finalizar o jogo
7º passo - Se estiver incorreta:
        - Se estiver incorreta e acabaram as   tentativas informar o jogador que ele perdeu o jogo.
8º passo - Se ele ainda tiver tentativas:
        - informar se o número que ele inseriu é maior ou menor que o número aletório gerado
        - Pedir outra tentativa para o jogador

*/


/* 1º PASSO *

método: Math.radom = gera um número aleatório
           Math.round = arredonda o número gerado
           * 100 = deixa o número maior, antes estava sendo gerado número como - 0,873636...
*/

var numeroAleatorio = Math.round(Math.random() * 100);
    if (numeroAleatorio === 0) {
        numeroAleatorio = 1;
    }
// console.log(numeroAleatorio);


/* 2º PASSO */


var numeroTentativas = 10;


/* 3º PASSO 

método readline: lê uma linha de um arquivo e retorna essa linha como um string. Permite ler input do usuário pelo console. Para usar devemos usar o método depois. Então.
1º cria uma varável e chama o readline
2º cria uma variável e chama o método dele, com paramétoro um objeto json, com input e output. Entrada e saída
*/

var readline = require("readline");

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/* PASSO 4, 5, 6, 7, 8 

O tipo de varável do numeroAleatorio é int e o tipo de varável do numero é string. Comparando os dois número com 3 iguais === teria que converter o tipo da varável numero pra int. Uma alterativa seria colocar == que compara somente o valor e não o tipo de variaável junto como os 3 iguais ==== 
Com o método parseint você consegue converter uma string em int

método rl.close() fecha o jogo, a linha de comando se encerra, rl é o nome da variável que dei, poderia ser - jogo.close() caso eu tivesse guardado o método do readline numa varável chamada jogo

Coloquei toda a etapa dentro de uma função e chamnei a função dentro da própria função, logo abaixo dos dois elses que mostram se o número informado é maior ou menor do que o número digitado para que faça novamente a pergunta para o jogador, para ele continuar digitando a pergunta, caso ainda tenha tentativas
*/

function pergunta () {

rl.question("Digite um número: ", function (numero) {
    console.log(numero); // imprime o número digitado pelo usuário
    numero = parseInt(numero);
    numeroTentativas--; // decrementa o número de tentativa assim que o usuário digitou um número e queimou uma tentativa
    if (numero === numeroAleatorio) {
        console.log("Parabéns, você acertou o número!");
        rl.close();
    } else if (numeroTentativas === 0) {
        console.log("Suas tentativas se esgotaram");
        rl.close();
    } else if (numero > numeroAleatorio) {
        console.log("\nVocê Errou!\nAlternativas restantes: " + numeroTentativas + "\n" + numero + " é maior que o número aleatório\n");
        pergunta();
    } else {
        console.log("\nVocê Errou!\nAlternativas restantes: " + numeroTentativas + "\n" + numero + " é menor que o número aleatório\n");
        pergunta();
    }
});

};

pergunta();











