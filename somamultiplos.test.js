const { somaMultiplos } = require('../somamultiplos')

describe('Testando função para calcular o mdc entre dois números', () => {
    it('Testando o mdc entre dois números', () => {
        const esperado = 156361
        const retorno = somaMultiplos(1000)

        expect(retorno).toBe(esperado)
    });
});