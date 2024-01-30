const { funcaomdc } = require('../mdc')

describe('Testando função para calcular o mdc entre dois números', () => {
    it('Testando o mdc entre dois números', () => {
        const esperado = 6
        const retorno = funcaomdc(12, 30)

        expect(retorno).toBe(esperado)
    });
});