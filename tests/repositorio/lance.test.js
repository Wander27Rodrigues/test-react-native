import  { obtemLancesDoLeilao } from '../../src/repositorio/lance';

describe('repositorio/lance',() => {

    describe('obtemLancesDoLeilao', () => {

        it('retorna lista de lances', async () => {

            const ListLance = await obtemLancesDoLeilao();
            console.log(ListLance);
        })
    })
});