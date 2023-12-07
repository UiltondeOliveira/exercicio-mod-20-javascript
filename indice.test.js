const { indiceMaior, indiceMenor } = require('./indice')

describe('Índice dos números', () => {
    
    it('Validar o índice do maior número', () => {
        expect(indiceMaior).toBe(8)
    });

    it('Validar o índice do menor número', () => {
        expect(indiceMenor).toBe(4)
    });
});