import { formataMaiorLanceDoLeilao } from '../../src/negocio/formatadores/lance';

describe("negocio/formatores/lance", () => {

    it("deve retorna o maior valor", () => {
        const resultado = formataMaiorLanceDoLeilao("9,00");

        expect(resultado).toBe(9.00)
        console.log(resultado);
    })
})