// Criando uma função para fazer a soma dos múltiplos de 5 ou 7 e inicializando em zero a variável "soma" 
function somaMultiplos() {
    let soma = 0;

    // Usando o laço "for" para percorrer os números de 1 a 999
    // Condicionando o índice a ter resto zero na dívisão por 5 ou 7 e incrementando na variável "soma"  
    for (let i = 1; i < 1000; i++) {
        if (i % 5 == 0 || i % 7 == 0) {
            soma = soma + i;
        }
    }
    return soma;
}
module.exports = { somaMultiplos }
//Executando o código
const somaFinal = somaMultiplos();
console.log(somaFinal);