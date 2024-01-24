// Criando uma função para os índices do Array
function Indices(array) {
    // Verifica se o array está vazio
    if (array.length == 0) {
        console.log("O array está vazio");
        return;
    }
    //Criando uma função para ver se há itens duplicados no array
    function itemDuplicado(array) {
        return (new Set(array)).size !== array.length;
    }
    // Armazena e inicializa o maior e o menor índice
    let IndiceMaior = 0;
    let IndiceMenor = 0;

    // Verifica se há itens duplicados no array
    if (itemDuplicado(array)) {
        console.log('O array possui itens duplicados');
        return;
    }
    // Usa o laço "for" para percorrer o array
    for (let i = 1; i < array.length; i++) {
        if (array[i] > array[IndiceMaior]) {
            IndiceMaior = i;
        } else if (array[i] < array[IndiceMenor]) {
            IndiceMenor = i;
        }
    }

    console.log(`O índice do maior valor (${array[IndiceMaior]}) é ${IndiceMaior}`);
    console.log(`O índice do menor valor (${array[IndiceMenor]}) é ${IndiceMenor}`);

}
// Executando e testando o programa
let arrayNum = [5, 1, 8, 2, 7];
Indices(arrayNum);
