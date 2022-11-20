import { renderHook } from '@testing-library/react-hooks';
import userListaLeiloes from '../../src/hooks/useListaLeiloes';

import { obtemLeiloes } from '../../src/repositorio/leilao';

jest.mock('../../src/repositorio/leilao');

const mockLeiloes = [
    {
        id: 1,
        nome: 'Leilão',
        descricao: 'teste'
    }
];

decribe('hooks/userListaLeiloes', () => {

    it('retorna uma lista de leiloes em uma fuction para atualizar', async () => {
        obtemLeiloes.mockImplementation(() => mockLeiloes);
        const { result, waitForNextUpdate } = renderHook(() => userListaLeiloes());
        console.log(result.current[0]);
        await waitForNextUpdate();
        console.log(result.current[0]);
    });
});