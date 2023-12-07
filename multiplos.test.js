const { somaDeMultiplos } = require('./multiplos')

describe('Soma de múltiplos', () => {
    
    it('Validar a soma dos múltiplos de 5 e 7 menores que 1000', () => {
        expect(somaDeMultiplos(5,7)).toBe(156361)
    });
});