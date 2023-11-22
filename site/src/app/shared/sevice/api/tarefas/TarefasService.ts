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

export interface ILogin {
    email: string;
    senha: string;
}

export interface ITokenId {
    Id: string;
    token: string;
}

export interface IListagemHemocentro {
    idHospital: number;
    nome: string;
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

export interface IAgenda {
    idAgendamento: number;
    fkHospital: number;
    horario: Date;
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

type TAgenda = {
    data: IAgenda[];
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

const getAllHistoricoAgendamento = async (token: string): Promise<TAgenda | ApiException> => {
    try {

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        };
        
        const { data } = await Api().get('/Agenda', { headers });

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

const getAllHospital = async (filter = '', token: string): Promise<THemocentroComTotalCount | Error> => {
    try {
        const urlRelativa = `/hospital?nome_like=${filter}`;

        const headers = {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
          };

        const { data } = await Api().get(urlRelativa, { headers });

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

const postLogin = async (dataToUpdate: ILogin): Promise<ITokenId | ApiException> => {
    try {
        const { data } = await Api().post(`/auth/login`, dataToUpdate);
        return data;
    }
    catch (error: any) {
        return new ApiException(error.message || 'Erro ao realizar o login.');
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
    getAllHistoricoAgendamento,
    getById,
    postLogin,
    getByIdHistoricoAgendamentoAtual,
    create,
    updateById,
    deleteById,
    deleteByIdAgedamento,
};