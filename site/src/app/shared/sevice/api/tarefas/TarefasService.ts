import { Api } from "../ApiConfig";
import { ApiException } from "../ApiException";

export interface ITarefa {
    id: number;
    nome: string;
    email: string | null;
    senha: string | null;
    role: string;
    cpf: string;
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

const getAll = async (): Promise<ITarefa[] | ApiException> => {
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



const getById = async (id: number): Promise<ITarefa | ApiException> => {
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
const create = async (dataToCreate: Omit<ITarefa, 'id'>): Promise<ITarefa | ApiException> => {
    try {
        const { data } = await Api().post<any>('/usuario/register', dataToCreate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao criar registro.');
    }

};

const updateById = async (id: number, dataToUpdate: ITarefa): Promise<ITarefa | ApiException> => {
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

export const TarefasService = {
    getAll,
    getAllHospital,
    getById,
    getByIdHistoricoAgendamentoAtual,
    create,
    updateById,
    deleteById,
};