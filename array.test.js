const { Indices, itemDuplicado } = require('../array')

describe('Testando função para percorrer um Array', () => {
    it('Percorrendo o array e verificando seus índices', () => { 
        // verificando se o array está vazio
        expect(Indices).not.toBeNull()
        // verificando se há itens duplicados no array
        expect(itemDuplicado).not.toEqual('O array possui itens duplicados')
    });

});
