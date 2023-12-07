const { calculadoraMDC } = require('./mdc')

describe('Validar o MDC entre dois números', () => {
    
    it('Validar o MDC entre dois números positivos', () => {
        expect(calculadoraMDC(20,37)).toBe(1)
    });
});