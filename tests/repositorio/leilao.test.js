import { obtemLeiloes } from '../../src/repositorio/leilao';
import apiLeiloes from '../../src/servicos/apiLeiloes';

jest.mock('../../src/servicos/apiLeiloes');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'teste'
    }
];

const mockRequisicao = (retorno) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                data: retorno
            })
        }, 200);
    });
}

const mockRequisicaoErro = () => {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject();
        }, 200);
    });
}

describe('repositorio/leilao', () => {

    // limpar chamadas/mock
    beforeEach(() => {
        apiLeiloes.get.mockClear();
    })

    describe('obtemLeiloes', () => {

        test('deve retornar uma lista de leilões', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicao(mockLeiloes));
            const obtem = await obtemLeiloes();
            // console.log(obtem);
            expect(obtem).toEqual(mockLeiloes);

            // verificando se o mesmo foi chamado com o parametro
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            // quantas vezes foi chamado
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);
        });

        test('deve retornar uma lista vazia quando falhar', async () => {
            apiLeiloes.get.mockImplementation(() => mockRequisicaoErro());
            const obtem = await obtemLeiloes();

            expect(obtem).toEqual([]);

            // verificando se o mesmo foi chamado com o parametro
            expect(apiLeiloes.get).toHaveBeenCalledWith('/leiloes');
            // quantas vezes foi chamado
            expect(apiLeiloes.get).toHaveBeenCalledTimes(1);

        });
    });
})