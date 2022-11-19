import { formataBrasileiroParaDecimal } from '../../src/negocio/formatadores/moeda';

describe("negocio/formatores/moeda", () => {
    describe("formataBrasileiroParaDecimal", () => {
        
        it("deve retorna 8.59 quando o valor for '8,59'", () => {
            const resultado = formataBrasileiroParaDecimal ("8,59");

            expect(resultado).toBe(8.59)
            console.log(resultado);
        });
    });
})