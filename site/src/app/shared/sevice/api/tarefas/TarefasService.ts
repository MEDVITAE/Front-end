import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface IPrimeiroCadastro {
    id: number;
    nome: string;
    email: string | null;
    senha: string | null;
    role: string;
    cpf: string;
}

export interface ISegundoCadastroEndereco{
    cidade: string;
    bairro: string;
    cep: string;
    logradouro: string;
    rua: string;
    numero: number;
    fkUsuario: number;
}
export interface ISegundoCadastroCaracteristicas{
    peso :string;
    altura : string;
    tatto: boolean;
    sexo: string;
    nascimento: string;
    apto: boolean;
    fkUsuario: number;
}

export interface IListagemHemocentro {
    id: number;
    nome: string;
    cep: string;
}

export interface IListagemDeHorarioDisponivel {
    id: number;
    hora: number;
    hospital?: IListagemHemocentro[];
}

export interface IAgendamento {
    id: number;
    pontos: number;
    horaMarcada: IListagemDeHorarioDisponivel;
    hospital: IListagemHemocentro;
}

type THoraDisponivelComTotalCount = {
    data: IListagemHemocentro[];
}

type THemocentroComTotalCount = {
    data: IListagemHemocentro[];
}

export interface IHistoricoAgendamento {
    id: number;
    agenda: IAgendamento;
}

type THistoricoAgendamento = {
    data: IHistoricoAgendamento[];
}

const getAll = async (): Promise<IPrimeiroCadastro[] | ApiException> => {
    try {
        const { data } = await Api().get('/swagger-ui.html');
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar Api.');
    }

};

const getAllHistoricoAgendamento = async (): Promise<THistoricoAgendamento | Error> => {
    try {

        const { data } = await Api().get('/');

        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

const getAllHoraDisponivel = async (): Promise<THoraDisponivelComTotalCount | Error> => {
    try {

        const { data } = await Api().get('/');

        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

const getAllHospital = async (filter = ''): Promise<THemocentroComTotalCount | Error> => {
    try {
        const urlRelativa = `/hemocentro?nomeCompleto_like=${filter}`;

        const { data } = await Api().get(urlRelativa);

        if (data) {
            return {
                data
            };
        }

        return new Error('Erro ao listar registros.');
    } catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};



const getById = async (id: number): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().get(`/tarefas/${id}`);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao consultar registro.');
    }

};


const getByIdHistoricoAgendamentoAtual = async (id: number): Promise<IHistoricoAgendamento | Error> => {
    try {

        const { data } = await Api().get('/');

        return data;
    }
    catch (error) {
        console.error(error);
        return new Error((error as { message: string }).message || 'Erro ao listar registros.');
    }
};

//Criar outro método para inserção de dados
const createUsuario = async (dataToCreate: Omit<IPrimeiroCadastro, 'id'>): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().post<any>('/usuario/register', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const createUsuarioEndereco = async (dataToCreate: ISegundoCadastroEndereco): Promise<ISegundoCadastroEndereco | ApiException> => {
    try {
        const { data } = await Api().post<any>('/Endereco', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const createUsuarioCaracteristicas = async (dataToCreate: ISegundoCadastroCaracteristicas): Promise<ISegundoCadastroCaracteristicas | ApiException> => {
    try {
        const { data } = await Api().post<any>('/Caracteristicas', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const updateById = async (id: number, dataToUpdate: IPrimeiroCadastro): Promise<IPrimeiroCadastro | ApiException> => {
    try {
        const { data } = await Api().put(`/tarefas/${id}`, dataToUpdate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao atualizar registro.');
    }

};

const deleteById = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }

};

const deleteByIdAgedamento = async (id: number): Promise<undefined | ApiException> => {
    try {
        await Api().delete(`/tarefas/${id}`);
        return undefined;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao apagar registro.');
    }

};

export const TarefasService = {
    getAll,
    getAllHospital,
    getById,
    getByIdHistoricoAgendamentoAtual,
    createUsuario,
    createUsuarioEndereco,
    createUsuarioCaracteristicas,
    updateById,
    deleteById,
    deleteByIdAgedamento,
};