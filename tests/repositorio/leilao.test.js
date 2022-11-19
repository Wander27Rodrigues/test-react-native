import { obtemLeiloes } from '../../src/repositorio/leilao';


describe('repositorio/leilao', () => {

    describe('obtemLeiloes', () => {

        test('deve retornar uma lista de leilões', async () => {
            const obtem = await obtemLeiloes();
            console.log(obtem);
        });
    });
})